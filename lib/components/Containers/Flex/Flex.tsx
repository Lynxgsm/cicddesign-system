import React from "react";
import { FlexProps } from "./Flex.interface";
import { useFormat } from "../../../core/format";
import styles from './Flex.module.scss'

export const Flex = ({justifyContent, alignItems, gap, flexWrap, flexDirection, element, breakpoints , ...props }: FlexProps): JSX.Element => {

    const { classes, unitFormatter } = useFormat()

    return React.createElement(element || 'div', {
        ...props,
        className: classes(
            styles.flex,
            styles[breakpoints || ''],
            props.className,
        ),
        style: {
            ...props.style,
            justifyContent,
            alignItems,
            gap: gap && unitFormatter(gap),
            flexWrap,
            flexDirection
        },
    });
}