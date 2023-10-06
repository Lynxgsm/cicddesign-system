import React from 'react';
import styles from './Block.module.scss';
import { useFormat } from '../../../core/format';
import { ContainerProps } from '../Container.interface';

export const Block = ({breakpoints, element, ...props }: ContainerProps) => {

    const { classes } = useFormat()

    return React.createElement(element || 'div', {
        ...props,
        className: classes(
            styles.block,
            styles[breakpoints || ''], props.className
        ),
    });
}