import React, { ReactNode, Ref } from "react";
import { UnitString } from "../../../types/common/unit-string";

export interface ListTileProps {
    children?: React.ReactNode,
    title: string,
    leading?: ReactNode,
    trailing?: ReactNode,
    width?: UnitString,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    ref?: Ref<HTMLElement>
}