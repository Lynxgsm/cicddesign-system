import React, { CSSProperties } from "react";
import { ColorScheme } from "../../../types/color-scheme";


export interface NavbarProps{
    children?: React.ReactElement[] | React.ReactElement,
    position?: 'fixed' | 'relative',
    decoration?: 'top' | 'left' | 'right' | 'bottom' | 'none',
    style?: CSSProperties,
    colorScheme?: ColorScheme
}