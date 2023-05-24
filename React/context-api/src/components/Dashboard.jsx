import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
function Dashboard() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="h-screen flex justify-center gap-4 items-center my-auto">
      <button
        className={` px-4 py-2 rounded-md ${
          isDarkMode ? "bg-white text-black" : "bg-black text-white"
        } `}
        onClick={toggleTheme}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
export default Dashboard;
