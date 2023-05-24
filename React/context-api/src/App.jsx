import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Dashboard from "./components/Dashboard";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div
        className={`h-screen w-screen ${isDarkMode ? "bg-black" : "bg-white"}`}
      >
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
          <Dashboard />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
