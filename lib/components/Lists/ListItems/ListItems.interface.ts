import React, { ReactNode, Ref } from "react";
import { UnitString } from "../../../types/common/unit-string";

export interface ListItemsProps {
    children?: React.ReactNode,
    title: string,
    leading?: ReactNode,
    trailing?: ReactNode,
    width?: UnitString,
    ref?: Ref<HTMLElement>
}