import React from "react";
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
