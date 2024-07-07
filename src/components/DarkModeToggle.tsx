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

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="12"
      cy="12"
      r="5"
      stroke="black"
      strokeWidth="2"
      fill="yellow"
    />
    <line x1="12" y1="1" x2="12" y2="3" stroke="black" strokeWidth="2" />
    <line x1="12" y1="21" x2="12" y2="23" stroke="black" strokeWidth="2" />
    <line
      x1="4.22"
      y1="4.22"
      x2="5.64"
      y2="5.64"
      stroke="black"
      strokeWidth="2"
    />
    <line
      x1="18.36"
      y1="18.36"
      x2="19.78"
      y2="19.78"
      stroke="black"
      strokeWidth="2"
    />
    <line x1="1" y1="12" x2="3" y2="12" stroke="black" strokeWidth="2" />
    <line x1="21" y1="12" x2="23" y2="12" stroke="black" strokeWidth="2" />
    <line
      x1="4.22"
      y1="19.78"
      x2="5.64"
      y2="18.36"
      stroke="black"
      strokeWidth="2"
    />
    <line
      x1="18.36"
      y1="5.64"
      x2="19.78"
      y2="4.22"
      stroke="black"
      strokeWidth="2"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 12.79C19.71 12.89 18.42 13 17 13C10.373 13 5 7.627 5 1C5 0.613 5.062 0.227 5.105 0C2.55 1.564 1 4.254 1 7.5C1 12.747 5.253 17 10.5 17C13.746 17 16.436 15.45 18 12.895C17.773 12.938 17.387 13 17 13C13.093 13 9.764 15.93 9.176 19.676C9.062 20.482 9.001 21.245 9 22H21C21 16.478 21 15.605 21 14.213C21 13.653 21 13.249 21 12.79Z"
      fill="black"
    />
  </svg>
);

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
    <div className="container">
      <div className="btn">
        <input
          type="checkbox"
          name="check"
          id="check"
          checked={isDarkModeActive}
          onChange={toggleDarkMode}
        />
        <label htmlFor="check">
          <div
            className="box"
            style={{
              backgroundColor: isDarkModeActive ? "white" : "#000000a3",
            }}
          >
            <div
              className="ball"
              style={{
                transform: isDarkModeActive
                  ? "translatex(100%)"
                  : "translatex(0%)",
              }}
            ></div>
            <div className="scenary">
              <div className="moon">
                {" "}
                <SunIcon />
              </div>
              <div className="sun">
                <MoonIcon />
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );

  const UIComponent = CustomUI || DefaultUI;

  console.log("test");

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
