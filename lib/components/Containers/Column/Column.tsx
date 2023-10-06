import { useFormat } from "../../../core/format"
import { ColumnProps } from "./Column.interface"
import styles from './Column.module.scss';
import { Block } from '../Block/Block';

export const Column = ({col, ...props}: ColumnProps) => {
    const { classes } = useFormat()

    return (
        <Block {...props} className={classes(
            styles[`col${col ? `-${col}` : ''}`],
            {[styles[`col-xl-${props.xl}`]]: props.xl},
            {[styles[`col-l-${props.l}`]]: props.l},
            {[styles[`col-m-${props.m}`]]: props.m},
            {[styles[`col-s-${props.s}`]]: props.s},
            {[styles[`col-xs-${props.xs}`]]: props.xs},
            props.className
        )} />
    )
}