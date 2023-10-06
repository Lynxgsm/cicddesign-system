import React, { ReactNode } from "react";
import { UnitString } from "../../../types/common/unit-string";

export interface TileProps {
    children?: React.ReactNode,
    leading?: ReactNode,
    trailing?: ReactNode,
    disabled?: boolean,
    width?: UnitString,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
}