/// <reference types="react" />
declare const useDarkMode: (initialState?: boolean, settings?: {
    brightness: number;
    contrast: number;
    sepia: number;
}) => {
    isDarkModeActive: boolean;
    toggleDarkMode: () => Promise<void>;
    setBrightness: import("react").Dispatch<import("react").SetStateAction<number>>;
    setContrast: import("react").Dispatch<import("react").SetStateAction<number>>;
    setSepia: import("react").Dispatch<import("react").SetStateAction<number>>;
};
export default useDarkMode;
