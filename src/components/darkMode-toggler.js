import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const DarkModeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
  );
};

export default DarkModeToggler;
