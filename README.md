# Dark Mode Hook

A reusable dark mode functionality hook and customizable UI for React applications.

## Installation

#### Use This Custom Hook directly in your application

You can use the `dark-mode-hook` directly into your React application. Check out the [React Custom Hook repository](https://github.com/meetamjadsaeed/React-Dark-Mode-Boilerplate) for detailed usage instructions and customization options.

Install the package via npm:

```bash
npm install react-night-mode-hook
```

## Usage

### Using Default UI with Custom Settings

In your component:

```javascript
import React from "react";
import { DarkModeToggle, useDarkMode } from "react-night-mode-hook";
const { isDarkModeActive } = useDarkMode();

function App() {
  return (
    <div>
      <h1>My App</h1>
      <DarkModeToggle settings={{ brightness: 90, contrast: 80, sepia: 20 }} />
    </div>
  );
}

export default App;
```

### Using Default UI with Default Settings

In your component:

```javascript
import React from "react";
import { DarkModeToggle } from "react-night-mode-hook";
const { isDarkModeActive } = useDarkMode();

function App() {
  return (
    <div>
      <h1>My App</h1>
      <DarkModeToggle />
    </div>
  );
}

export default App;
```

### Using Custom UI with Custom Settings

Pass your custom UI component as a prop to `DarkModeToggle`:

```javascript
import React from "react";
import { DarkModeToggle } from "react-night-mode-hook";
const { isDarkModeActive } = useDarkMode();

const CustomDarkModeUI = ({ toggleHandler }) => (
  <div>
    <button onClick={toggleHandler}>Toggle Dark Mode</button>
  </div>
);

function App() {
  return (
    <div>
      <h1>My App</h1>
      <DarkModeToggle
        customUI={CustomDarkModeUI}
        settings={{ brightness: 90, contrast: 80, sepia: 20 }}
      />
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License.
