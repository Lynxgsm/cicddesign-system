import { TableProps } from "./Table.interface"
import styles from '../Table.module.scss'
import { useFormat } from "../../../core/format"

export const Table = (props: TableProps) => {

    const { classes } = useFormat()

    return (
        <table {...props} className={classes(props.className, styles.table)}>
        </table>
    )
}