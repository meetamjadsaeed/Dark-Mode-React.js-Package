# Dark Mode Hook

A reusable dark mode functionality hook and customizable UI for React applications.

## Installation

Install the package via npm:

```bash
npm install react-night-mode-hook
```

## Usage

### Using Default UI with Custom Settings

In your component:

```javascript
import React from "react";
import { DarkModeToggle } from "react-night-mode-hook";

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

```

```
