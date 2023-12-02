import "@testing-library/jest-dom";
import { reconcile } from "../nodes/reconcile";
import { getByText, waitFor } from "@testing-library/dom";
import { createNativeElements } from "../nativeElements";

describe("render", () => {
    test("renders a HTML with a single expression", async () => {
        const element = document.createElement("div");
        element.innerHTML = "<div>Hello {{ name }}!</div>";
        const template = element.outerHTML;

        const nativeElements = createNativeElements();
        nativeElements.add({
            element,
            template,
            lastTemplateEvaluation: template,
            parentAttributes: [],
        });
        reconcile(nativeElements, { name: "John" });

        await waitFor(() => {
            expect(getByText(element, "Hello John!")).toBeTruthy();
        });
    });
});
