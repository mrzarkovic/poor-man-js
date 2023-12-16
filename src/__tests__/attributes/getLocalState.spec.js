import "@testing-library/jest-dom";
import { getLocalState } from "../../attributes/getLocalState";

describe("getLocalState", () => {
    test("get local state from attributes", () => {
        const reactiveNodes = [
            {
                id: 0,
                parentId: null,
                attributes: [
                    {
                        name: "data-parent",
                        value: "parent",
                        expressions: [],
                    },
                ],
            },
            {
                id: 1,
                parentId: 0,
                attributes: [
                    {
                        name: "data-parent2",
                        value: "parent2",
                        expressions: [],
                    },
                ],
            },
            {
                id: 2,
                parentId: 1,
                attributes: [
                    {
                        name: "data-parent3",
                        value: "parent3",
                        expressions: [],
                    },
                ],
            },
        ];
        const elementAttributes = [
            {
                name: "data-child",
                value: "child",
                expressions: [],
            },
        ];
        const globalState = {
            global: {
                value: 42,
                dependents: [],
                computants: [],
                dependencies: [],
            },
        };
        const localState = getLocalState(
            2,
            elementAttributes,
            globalState,
            [],
            reactiveNodes
        );

        expect(localState).toStrictEqual({
            global: {
                value: 42,
                dependents: [],
                computants: [],
                dependencies: [],
            },
            dataChild: {
                value: "child",
                dependents: [],
                computants: [],
                dependencies: [],
            },
            dataParent: {
                value: "parent",
                dependents: [],
                computants: [],
                dependencies: [],
            },
            dataParent2: {
                value: "parent2",
                dependents: [],
                computants: [],
                dependencies: [],
            },
            dataParent3: {
                value: "parent3",
                dependents: [],
                computants: [],
                dependencies: [],
            },
        });
    });
});
