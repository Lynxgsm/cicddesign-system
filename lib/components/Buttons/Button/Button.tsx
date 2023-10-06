import styles from './Button.module.scss'
import { ButtonProps } from './Button.interface'
import { useFormat } from '../../../core/format';
import React from 'react';
import { Flex } from '../../Containers/Flex/Flex';

export const Button = ({variant, size, colorScheme, fullwidth, radius, rightIcon, leftIcon, ...props }: ButtonProps) => {
    const { classes, unitFormatter, parseIcon } = useFormat()

    return React.createElement(props.href ? 'a' : 'button', {
        ...props,
        className: classes(
            props.className,
            styles[`button-${variant || 'default'}`],
            styles[`button-${size || 'm'}`],
            styles[`button-${colorScheme || 'supernova'}`],
        ),
        style: {
            borderRadius: radius && unitFormatter(radius, '%'),
            width: fullwidth ? '100%' : undefined,
            ...props.style
        },
    }, (
        <Flex gap={10} justifyContent="center" alignItems="center">
            {leftIcon && parseIcon(leftIcon)}
            {props.children}
            {rightIcon && parseIcon(rightIcon)}
        </Flex>))
}