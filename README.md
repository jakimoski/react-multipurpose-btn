# `react-multipurpose-btn`

## Overview

`react-multipurpose-btn` is a versatile button component for React applications. It provides a range of customization options, making it suitable for various use cases, from simple buttons to complex interactive elements.

## Features

- Customizable styles and appearance
- Support for different button types (e.g., primary, secondary)
- Easy integration with React applications
- Built-in accessibility features

## Installation

To install the `react-multipurpose-btn` package, use npm or yarn:

Clone the project

```bash
  git clone https://github.com/jakimoski/react-multipurpose-btn.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the project locally

```bash
  npm run dev
```

Build

```bash
  npm run build
```

## Usage

### Basic Usage

Import the MultipurposeButton component into your React file and use it as follows:

```javascript
import React from "react";
import { MultipurposeButton } from "react-multipurpose-btn";

const App = () => (
  <div>
    <MultipurposeButton onClick={() => alert("Button clicked!")}>
      Click Me
    </MultipurposeButton>
  </div>
);

export default App;
```

### Props

The MultipurposeButton component accepts the following props:

- `type` (string): The type of button. Defaults to `"button"`. Other values can be `"submit"` or `"reset"`.
- `onClick` (function): The function to be called when the button is clicked.
- `className` (string): Custom CSS class to apply to the button.
- `style` (object): Inline styles to apply to the button.
- `disabled` (boolean): Whether the button is disabled. Defaults to false.
- `children` (node): The content to display inside the button.

### Examples

#### Primary Button

```javascript
<MultipurposeButton
  type="button"
  onClick={() => console.log("Primary Button Clicked!")}
>
  Primary Button
</MultipurposeButton>
```

#### Disabled Button

```javascript
<MultipurposeButton type="button" disabled>
  Disabled Button
</MultipurposeButton>
```

#### Custom Styles

```javascript
<MultipurposeButton
  type="button"
  className="my-custom-class"
  style={{ backgroundColor: "blue", color: "white" }}
>
  Custom Styled Button
</MultipurposeButton>
```
