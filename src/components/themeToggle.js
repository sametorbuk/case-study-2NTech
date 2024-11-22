"use client";

import { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button onClick={toggleTheme} className="btn font-bold">
      {darkMode ? "Light Mod" : "Dark Mod"}
    </button>
  );
};

export default ThemeToggle;
