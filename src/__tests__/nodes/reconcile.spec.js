import "@testing-library/jest-dom";

import { reconcile } from "../../nodes/reconcile";
import { createReactiveNodes } from "../../createReactiveNodes";
import { registerNativeElements } from "../../nodes/registerNativeElements";
import { getByTestId, getByText } from "@testing-library/dom";

describe("reconcile", () => {
    test("update changed elements", () => {
        const root = document.createElement("div");
        const element1 = document.createElement("div");
        element1.textContent = "{{ name }}";
        const element2 = document.createElement("div");
        element2.textContent = "name";
        root.appendChild(element1);
        root.appendChild(element2);
        document.body.appendChild(root);
        const reactiveNodes = createReactiveNodes();

        registerNativeElements(root, { name: "John" }, reactiveNodes);

        reconcile(
            reactiveNodes,
            {
                name: "Mike",
            },
            ["name"]
        );

        expect(getByText(root, "Mike")).toBeInTheDocument();
    });

    test("update attribute", () => {
        const root = document.createElement("div");
        const element1 = document.createElement("div");
        element1.textContent = "Hello";
        element1.setAttribute("data-attribute-checked", "{{ checked }}");
        element1.setAttribute("data-testid", "checkbox");
        root.appendChild(element1);
        document.body.appendChild(root);

        const reactiveNodes = createReactiveNodes();

        registerNativeElements(root, { checked: "false" }, reactiveNodes);

        reconcile(
            reactiveNodes,
            {
                checked: true,
            },
            ["checked"]
        );

        expect(
            getByTestId(root, "checkbox").getAttribute("data-attribute-checked")
        ).toBe("true");
    });
});
