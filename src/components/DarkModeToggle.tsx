import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import "../styles/dark-mode-toggle.css";

interface Props {
  customUI?: React.ComponentType<any>;
  settings?: {
    brightness: number;
    contrast: number;
    sepia: number;
  };
}

const DarkModeToggle: React.FC<Props> = ({
  customUI: CustomUI,
  settings = { brightness: 100, contrast: 90, sepia: 10 },
}) => {
  const {
    isDarkModeActive,
    toggleDarkMode,
    setBrightness,
    setContrast,
    setSepia,
  } = useDarkMode(false, settings);

  const DefaultUI = () => (
    <div className="darkmode-wrapper">
      <div className="darkmode">
        <input
          type="checkbox"
          className="dark-checkbox"
          id="dark-checkbox"
          onClick={toggleDarkMode}
        />
        <label htmlFor="dark-checkbox" className="dark-label">
          <i className="fas fa-moon darkmode-moon"></i>
          <i className="fas fa-sun darkmode-sun"></i>
          <div className="dark-mode-ball"></div>
        </label>
      </div>
    </div>
  );

  const UIComponent = CustomUI || DefaultUI;

  return (
    <UIComponent
      toggleHandler={toggleDarkMode}
      setBrightness={setBrightness}
      setContrast={setContrast}
      setSepia={setSepia}
    />
  );
};

export default DarkModeToggle;
