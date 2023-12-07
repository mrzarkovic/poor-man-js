import { ChangedNode } from "../types";
import { getChangedAttributes } from "../attributes/getChangedAttributes";

export function compareTextNodes(
    oldNode: HTMLElement,
    newNode: HTMLElement
): ChangedNode[] {
    if (oldNode.textContent !== newNode.textContent) {
        return [
            {
                node: oldNode,
                content: newNode.textContent ?? "",
            },
        ];
    }
    return [];
}

export function compareChildNodes(
    oldNode: HTMLElement,
    newNode: HTMLElement
): ChangedNode[] {
    let changedChildren: ChangedNode[] = [];
    let differentChildren = false;

    const toBeRemoved: HTMLElement[] = [];
    const toBeAdded: HTMLElement[] = [];

    const nodesLength = Math.max(
        oldNode.childNodes.length,
        newNode.childNodes.length
    );

    for (let i = 0; i < nodesLength; i++) {
        const oldChild = oldNode.childNodes[i] as HTMLElement;
        const newChild = newNode.childNodes[i] as HTMLElement;

        if (
            typeof oldChild !== "undefined" &&
            oldChild.nodeType === Node.TEXT_NODE &&
            typeof newChild !== "undefined" &&
            newChild.nodeType === Node.TEXT_NODE
        ) {
            if (oldChild.textContent?.trim() !== newChild.textContent?.trim()) {
                differentChildren = true;
                break;
            }
        } else if (
            typeof oldChild === "undefined" &&
            typeof newChild !== "undefined"
        ) {
            toBeAdded.push(newChild);
        } else if (
            typeof oldChild !== "undefined" &&
            typeof newChild === "undefined"
        ) {
            toBeRemoved.push(oldChild);
        } else {
            changedChildren = changedChildren.concat(
                compareNodes(oldChild, newChild)
            );
        }
    }

    if (toBeRemoved.length > 0) {
        changedChildren.push({
            node: oldNode,
            toBeRemoved,
        });
    }

    if (toBeAdded.length > 0) {
        changedChildren.push({
            node: oldNode,
            toBeAdded,
        });
    }

    if (differentChildren) {
        return [
            {
                node: oldNode,
                content: newNode.innerHTML,
            },
        ];
    }

    return changedChildren;
}

export function compareNodes(
    oldNode: HTMLElement,
    newNode: HTMLElement
): ChangedNode[] {
    if (oldNode.nodeType === Node.TEXT_NODE) {
        return compareTextNodes(oldNode, newNode);
    }

    const changedAttributes = getChangedAttributes(oldNode, newNode);
    const changedChildren: ChangedNode[] =
        changedAttributes.length > 0
            ? [
                  {
                      node: oldNode,
                      attributes: changedAttributes,
                  },
              ]
            : [];

    return changedChildren.concat(compareChildNodes(oldNode, newNode));
}
