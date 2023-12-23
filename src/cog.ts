import { type Cog, UnknownFunction, StateValue } from "./types";
import { registerTemplates } from "./nodes/registerTemplates";
import { addAllEventListeners } from "./eventListeners/addAllEventListeners";
import { registerNativeElements } from "./nodes/registerNativeElements";
import { reconcile } from "./nodes/reconcile";
import { createState } from "./createState";
import { createReactiveNodes } from "./createReactiveNodes";

export const init = (): Cog => {
    let stateFunctionExecuting: string | null = null;
    const reactiveNodes = createReactiveNodes();
    let updateStateTimeout: number | null = null;
    const state = createState();
    const components: Record<string, string[]> = {};

    function reRender() {
        state.updatedElements.forEach((elementId) => {
            const reactiveNode = reactiveNodes.get(elementId);

            reconcile(
                reactiveNodes,
                reactiveNode,
                state,
                state.elementsUpdatedKeys[elementId]
            );
        });

        // TODO: Figure this one out
        // reactiveNodes.clean();
        state.clearUpdates();
    }

    let lastFrameTime = 0;
    const frameDelay = 1000 / 60;

    function scheduleReRender() {
        if (updateStateTimeout !== null) {
            cancelAnimationFrame(updateStateTimeout);
        }
        updateStateTimeout = requestAnimationFrame((currentTime) => {
            if (currentTime - lastFrameTime > frameDelay) {
                lastFrameTime = currentTime;
                reRender();
            }
        });
    }

    const render = async (rootElement: HTMLElement) => {
        const componentNames = Object.keys(components);
        for (let i = 0; i < componentNames.length; i++) {
            const componentName = componentNames[i];
            const response = await fetch(
                `components/${componentName}/index.html`
            );
            const data = await response.text();

            rootElement.innerHTML += data;

            for (let j = 0; j < components[componentName].length; j++) {
                const templateName = components[componentName][j];
                const response = await fetch(
                    `components/${componentName}/${templateName}.html`
                );
                const data = await response.text();

                rootElement.innerHTML += data;
            }
        }

        addAllEventListeners(rootElement, state.value);
        registerNativeElements(rootElement, state.value, reactiveNodes);
        registerTemplates(rootElement, state, reactiveNodes);
    };

    const component = (name: string, templates?: string[]) => {
        components[name] = templates || [];
    };

    const getFunctionValue =
        (name: string, value: UnknownFunction) =>
        (cogId: unknown, ...args: unknown[]) => {
            if (typeof cogId === "string") {
                if (cogId.indexOf("cogId:") === 0) {
                    cogId = cogId.replace("cogId:", "");
                } else {
                    args.unshift(cogId);
                    cogId = null;
                }
            }
            stateFunctionExecuting = cogId ? `${name}:${cogId}` : name;
            const result = value(...args);
            stateFunctionExecuting = null;
            return result;
        };

    const getArrayValue = (name: string, value: unknown[]) =>
        new Proxy(value, {
            get(target, propKey) {
                const originalMethod = target[
                    propKey as keyof typeof target
                ] as UnknownFunction;
                if (propKey === "push") {
                    return (...args: unknown[]) => {
                        const parts = stateFunctionExecuting?.split(".");

                        if (parts && parts.length > 1) {
                            const elementId = Number(parts[1].split(":")[1]);
                            state._registerStateUpdate(elementId, name);
                        } else {
                            state.value[name].computants.forEach(
                                (computant) => {
                                    state._registerGlobalStateUpdate(computant);
                                }
                            );
                            state._registerGlobalStateUpdate(name);
                        }

                        scheduleReRender();
                        return originalMethod.apply(target, args);
                    };
                }
                return originalMethod;
            },
        });

    const variable = <T>(name: string, value: T, template?: string) => {
        let fullStateName = name;
        if (template) {
            fullStateName = `${template}.${name}`;
        }

        if (value instanceof Function) {
            value = getFunctionValue(
                fullStateName,
                value as UnknownFunction
            ) as T;
        }

        if (template) {
            let valueProxy = undefined;
            if (Array.isArray(value)) {
                valueProxy = getArrayValue;
            }
            state.initializeTemplateState(template, name, value, valueProxy);
        } else {
            if (Array.isArray(value)) {
                value = getArrayValue(name, value) as T;
            }
            state.initializeGlobalState(name, value);
        }

        return {
            get value() {
                if (template) {
                    const parts = stateFunctionExecuting?.split(":") || [];
                    const elementId = parts[1] ? Number(parts[1]) : null;
                    if (elementId === null) {
                        throw new Error(
                            `Can't use outside of a template: ${name} (for ${template})`
                        );
                    }
                    const callerParts = parts![0].split(".");
                    const callerTemplate = callerParts[0];
                    const functionName = callerParts[1];
                    if (callerTemplate !== template) {
                        throw new Error(
                            `Can't use from another template: ${name} (for ${template}, used in ${callerTemplate})`
                        );
                    }

                    const stateValue = state.getTemplateState(template)
                        .customElements[elementId][name] as StateValue;

                    if (
                        functionName &&
                        stateValue.computants.indexOf(functionName) === -1
                    ) {
                        stateValue.computants.push(functionName);
                    }

                    return stateValue.value as T;
                }

                if (
                    stateFunctionExecuting !== null &&
                    (state.value[name] as StateValue).computants.indexOf(
                        stateFunctionExecuting
                    ) === -1
                ) {
                    (state.value[name] as StateValue).computants.push(
                        stateFunctionExecuting
                    );
                }

                return state.value[name].value as T;
            },
            set value(newVal: T) {
                if (template) {
                    const cogId = stateFunctionExecuting?.split(":")[1];
                    if (!cogId) {
                        throw new Error("Can't call outside of a template");
                    }

                    state.updateTemplateState(
                        template,
                        Number(cogId),
                        name,
                        newVal
                    );
                } else {
                    state.updateGlobalState(name, newVal);
                }
                scheduleReRender();
            },
            set: (newVal: T) => {
                if (template) {
                    const cogId = stateFunctionExecuting?.split(":")[1];
                    if (!cogId) {
                        throw new Error("Can't call outside of a template");
                    }

                    state.updateTemplateState(
                        template,
                        Number(cogId),
                        name,
                        newVal
                    );
                } else {
                    state.updateGlobalState(name, newVal);
                }
                scheduleReRender();
            },
        };
    };

    return {
        render,
        variable,
        component,
    };
};

export const { variable, render, component } = init();
