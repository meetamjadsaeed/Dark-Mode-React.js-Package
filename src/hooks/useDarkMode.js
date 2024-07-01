import { useState, useEffect } from "react";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  isEnabled as isDarkModeEnabled,
} from "darkreader";

const useDarkMode = (
  initialState = false,
  settings = { brightness: 100, contrast: 90, sepia: 10 }
) => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(initialState);
  const [brightness, setBrightness] = useState(settings.brightness);
  const [contrast, setContrast] = useState(settings.contrast);
  const [sepia, setSepia] = useState(settings.sepia);

  useEffect(() => {
    const checkDarkMode = async () => {
      try {
        const enabled = await isDarkModeEnabled();
        setIsDarkModeActive(enabled);
      } catch (error) {
        console.error("Error checking dark mode:", error);
      }
    };

    checkDarkMode();
  }, []);

  const toggleDarkMode = async () => {
    try {
      if (!isDarkModeActive) {
        await enableDarkMode({
          brightness: brightness,
          contrast: contrast,
          sepia: sepia,
        });
      } else {
        disableDarkMode();
      }

      setIsDarkModeActive(!isDarkModeActive);
    } catch (error) {
      console.error("Error toggling dark mode:", error);
    }
  };

  return {
    isDarkModeActive,
    toggleDarkMode,
    setBrightness,
    setContrast,
    setSepia,
  };
};

export default useDarkMode;
