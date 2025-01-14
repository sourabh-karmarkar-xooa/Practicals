import React, { useContext } from "react";

/**
 * Context lets us pass a value deep into the component tree
 * without explicitly threading it through every component.
 * Create a context for the current theme (with "light" as the default).
 */
const ThemeContext = React.createContext("light");

class App extends React.Component {
  render() {
    /**
     * Use a Provider to pass the current theme to the tree below.
     * Any component can read it, no matter how deep it is.
     * In this example, we're passing "dark" as the current value.
     */
    return (
      <ThemeContext.Provider value="light">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to pass the theme down explicitly anymore.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const ThemedButton = () => {
  // Using useContext method to access value in functional component.
  const value = useContext(ThemeContext);
  return <div>Context Value : {value}</div>;
};

export default App;
