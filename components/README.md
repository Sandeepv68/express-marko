# components
This folder contains the Marko components. Marko makes it easy to create UI component that can be used as building blocks for constructing web pages and web applications of any complexity. Marko promotes creating self-contained UI components that are independently testable and that encapsulate the view, client-side behavior (e.g., event handling) and styling. UI components can easily be combined to create composite UI components. Marko UI components compile into small and efficient JavaScript modules that hide implementation details from outside users. With Marko, the DOM output of a UI component is based on input properties and a UI component may also maintain internal state that is used to control the view. If Marko detects a change to either input or to the internal state then the view (i.e., the DOM) will automatically be updated based on the new input and state. Internally, Marko uses virtual DOM diffing/patching to update the view, but this is an implementation detail that could change at any time.

## Component structure
Marko makes it easy to to co-locate your component's class and styles with the HTML view that they correspond to. The following are the key part of any UI component:

- **View** - The HTML template for your UI component. Receives input properties and states and renders to either HTML (server-side) or virtual DOM nodes (browser-side)
- **Client-side behavior** - Implemented as a JavaScript class with methods and properties to provide initialization, event handling (including DOM events, custom events and lifecycle events) and state management
- **Styling** - Cascading StyleSheet with support for CSS preprocessors such as Less or Sass.

## Split Components
Split components allow you to optimize for the case where a component is rendered on the server, but doesn't need to be re-rendered in the browser. Because the component doesn't need to be rendered in the browser, the template does not need to be sent to the browser. This can reduce your page weight by a few hundred bytes in some cases.

> **Note**: If a split component is the child of a stateful component, the full rendering logic will still be sent down because the parent component may pass new input to the split component, requiring it to re-render.

Additionally if all components rendered on a page are split components, Marko's VDOM and rendering runtime is not necessary and therefore not sent to the browser, which can further reduce page weight by a few kilobytes.

> **ProTip**: Don't over-optimize. If your component really doesn't need re-rendering, go ahead and split, but don't forgo stateful re-rendering when it would make your code more maintainable.