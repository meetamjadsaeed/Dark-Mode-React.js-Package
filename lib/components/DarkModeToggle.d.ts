import React from "react";
import "../styles/dark-mode-toggle.css";
interface Props {
    customUI?: React.ComponentType<any>;
    settings?: {
        brightness: number;
        contrast: number;
        sepia: number;
    };
}
declare const DarkModeToggle: React.FC<Props>;
export default DarkModeToggle;
