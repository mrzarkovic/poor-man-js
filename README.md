<p align="center">
  <img src="https://raw.githubusercontent.com/mrzarkovic/cog/main/logo.png" alt="Cog Logo"/>
</p>

# ⚙️Cog - Reactive UI Library for HTML

![](https://img.shields.io/badge/dependencies-0-blue)
![](https://img.badgesize.io/mrzarkovic/Cog/main/lib/cog.js.svg?compression=gzip&label=gzip&max=5000&softmax=3000)
![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat&logo=jest)
![](https://img.shields.io/npm/v/@mzrk/cog)

Cog is a simple, beginner-friendly reactive UI library for building web applications, designed to provide a reactive programming experience using plain HTML and vanilla JavaScript with zero dependencies.

```html
<!-- index.html -->

<div id="app">
    <div>Counter: {{ counter }}</div>
    <button onclick="increment()">Increment</button>
</div>
```

```js
// index.js

const counter = variable("counter", 0);
function increment() {
    counter.set(counter.value + 1);
}
```

### Beginner-friendly

With zero dependencies and no extra tooling needed, Cog is a beginner-friendly library that keeps things simple. It uses plain HTML for templates, making it intuitive for those who are new to JavaScript or coming from a background of HTML and CSS.

> When you see HTML in a **Cog** application, it really is just HTML! 🤯

Just HTML, but with the added power of reactive expressions. This makes it easy to understand and learn, while still providing the reactivity that makes modern web apps feel smooth and responsive.

## Installation

Just add `<script>` tag to your `index.html`

```html
<script src="https://unpkg.com/@mzrk/cog@latest/lib/cog.js"></script>
```

Or you can install it via `npm` package manager:

```bash
npm install @mzrk/cog
```

## Usage

We'll build a simple counter. In this example, `countVariable` is a reactive variable and `count` is the name of the state variable used in the HTML template.

We'll add a new `<script>` tag to our `index.html`. We can then get the `variable` factory method from the global Cog object.

```html
<!-- index.html -->

<div id="app">...</div>
<script>
    const { variable } = Cog;
    // ...
</script>
```

Then we can write our counter logic:

```js
// Initialize reactive variable 'count'
const countVariable = variable("count", 0);

// Your typical callback function, nothing fancy
function incrementCount(e) {
    // Get count value and update it using count setter
    countVariable.set(countVariable.value + 1);
}
```

In the HTML, you can use `{{ count }}` to bind a variable to the text content of an element.

```html
<!-- index.html -->

<div id="app">
    <div>{{ count }}</div>
    <button onclick="incrementCount()">Increment</button>
</div>
<script>
    ...
</script>
```

When the button is clicked, the `incrementCount` function is called, which updates the `count` variable and triggers a re-render of the UI.

### Event Handlers in Modules

When using the Cog library with JavaScript modules, functions defined inside a module are not automatically available in the global scope. This means that they cannot be directly used as event handlers in your HTML, as the HTML only has access to the global scope.

#### Using Global Scope

You can explicitly add your functions to the global `window` object, which will make them available in the global scope and therefore usable as event handlers in your HTML.

```js
// In your JavaScript module
function increment() {
    counter.set(counter.value + 1);
}

// Add the function to the global window object
window.increment = increment;
```

Now, you can use `increment` as an `onclick` handler in your HTML:

```html
<button onclick="increment()">Increment</button>
```

This way, even though you're using modules, you can still use your functions as event handlers in your HTML.

#### Without Global Scope

When using JavaScript modules, you can avoid adding your functions to the global scope by implementing your own event listeners and handlers. This can be done by using `document.querySelector` or similar methods to get the HTML element, and then defining your own callbacks.

```js
import { variable } from "@mzrk/cog";

const counter = variable("counter", 0);

function increment() {
    counter.set(counter.value + 1);
}

// Get the button element
const button = document.querySelector("button");

// Add an event listener to the button
button.addEventListener("click", increment);
```

In this example, we're using `document.querySelector` to get the button element from the HTML. We then use `addEventListener` to add a 'click' event listener to the button. The `increment` function will be called whenever the button is clicked.

This way, you can use your functions as event handlers without adding them to the global scope.

### Cog Templates

In Cog, templates are a powerful feature that allows you to define reusable and dynamic HTML structures. They are defined using the `<template>` HTML element and can contain any HTML markup, including placeholders for dynamic content.

#### How Templates Work

In the next example, there are two templates defined: `my-element` and `my-checkbox`.

```html
<template id="my-text">
    <div class="bold">{{ children }}</div>
</template>
<template id="my-checkbox">
    <label><input type="checkbox" /> {{ label }}</label>
</template>
```

Each template has an `id` which is used to reference it in the rest of the HTML. Inside the templates, you can see `{{ children }}` and `{{ label }}`. These are placeholders for dynamic content.

When a custom element like `<my-text>` or `<my-checkbox>` is used in the HTML, Cog replaces the custom element with the corresponding template's content. Any placeholders in the template are replaced with the corresponding data from the custom element.

```html
<!-- This -->

<my-text>I'm the child</my-text>
<my-checkbox data-label="Check it"></my-checkbox>
```

For example, in the line `<my-text>I'm the child</my-text>`, `I'm the child` replaces `{{ children }}` in the `my-text` template.

In the case of `<my-checkbox data-label="Check it"></my-checkbox>`, the `data-label` attribute provides the data for the `{{ label }}` placeholder in the `my-checkbox` template.

```html
<!-- Becomes this -->

<div class="bold">I'm the child</div>
<label><input type="checkbox" /> Check it</label>
```

This way, you can define a template once and then use it multiple times with different data, reducing repetition and making your HTML more maintainable.

## Basic concepts

### `{{...}}`

The `{{...}}` construct in HTML templates is used for expression evaluation in Cog. It's a way to display the result of an expression, which can include variables from the state, directly in the HTML.

When you put an expression inside `{{}}` in your HTML, Cog will automatically evaluate it and replace the `{{}}` with the result. This is done every time the state changes, ensuring that the displayed result is always up-to-date.

```html
<div>{{ count * 2 }}</div>
```

In this example, `{{ count * 2 }}` will be replaced with the result of multiplying the current value of the `count` variable from the state by 2. If `count` changes, the content of the `<div>` will automatically update to show the new result.

### `variable()`

The Cog library is designed with simplicity in mind and thus provides a single API, the **variable** method.

`variable` is a function that creates a new reactive variable. It is used to create a state variable within the `state` object of the Cog library. It takes a name and an initial value as arguments, and adds an entry to the `state` object with the given name and value.

```js
const foo = variable("foo", "bar"); // state = { foo: "bar" }
```

The function returns an object with a `set()` method and a `value` getter, but also a setter in case you prefer to use it that way.

#### `set()`

The `set` method allows you to update the value of the state variable from your JavaScript code. It takes a new value as an argument, and updates the state variable with this new value.

```js
const foo = variable("foo", "bar");
foo.set("baz"); // state = { foo: "baz" }
```

When a state variable's value is updated using the `set` method, the UI is re-rendered, and any expressions referencing that variable are re-evaluated with the new value. This design allows the expressions in your HTML to automatically update whenever the state changes.

#### `value` (getter/setter)

The `value` getter allows you to retrieve the current value of the state variable from your JavaScript code.

```js
const foo = variable("foo", "bar");
console.log(foo.value); // "bar"
```

The `value` setter allows you to update the value of the state variable directly. It's an alternative to the `set()` method.

```js
const foo = variable("foo", "bar");
foo.value = "baz"; // state = { foo: "baz" }
```

Just like the `set()` method, when you change a state variable's value using the value setter, the UI is automatically re-rendered

### State

The `state` object is a key-value store that holds the current state of all reactive variables in the application. Each key in the `state` object corresponds to the name of a reactive variable used in HTML, and the associated value is the current value of that variable.

```html
<!-- index.html -->

<div>{{ meaningOfLife + 1 }}</div>
```

When an expression is evaluated, it's done so in the context of the `state` object. This means that any variables referenced in the expression are looked up in the `state` object.

```js
// Cog under the hood

const state = {
    meaningOfLife: 41,
};
const expression = "meaningOfLife + 1";
evaluateExpression(expression, state); // 42
```

Cog calls the `evaluateExpression` function internally when rendering UI with reactive variables. It creates a new function with values from the state in it's scope and executes the expression.

```js
// Example function created by evaluateExpression
const func = () => {
    const meaningOfLife = 41; // variable form the state

    return meaningOfLife + 1; // expression
}();
```

## The Motivation Behind Cog

The primary motivation behind the creation of Cog is to help those who are just getting into web development. We understand that the learning curve can be steep when you're starting out, especially with the multitude of complex libraries and frameworks available today.

Cog aims to flatten this learning curve. It's designed to be a stepping stone to bigger, more complex libraries and frameworks. With Cog, you can focus on learning the core concepts of reactive programming without getting overwhelmed by additional dependencies or complex tooling. All you need is vanilla JavaScript.

### ⚠️ Puns Alert!

Cog is not just about coding; it's about reducing your cognitive efforts. Just like a cog in a machine, our library plays a small but crucial role in the larger mechanism of web development. It helps you keep the wheels of your learning journey turning smoothly, without getting stuck on the complexities of state management.

So, gear up and let Cog drive your coding journey with less cognitive friction and more fun!

## Contributions

Hey there! If you're interested in the Cog project, we'd love to have you on board. Here's how you can help out:

-   **Bug Reports**: Found a bug? Let us know! Just create an issue in the GitHub repository with the details and steps to reproduce it.

-   **Feature Requests**: Got a cool idea for a new feature or improvement? We're all ears. Drop an issue describing your idea.

-   **Code Contributions**: If you're up for contributing code, go ahead and create a pull request. Just make sure your code follows the existing style and includes tests where needed.

-   **Documentation**: Remember, good documentation is just as crucial as good code. If you can make the docs better, that would be awesome!

Thanks for considering contributing to Cog!

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Milos Zarkovic
