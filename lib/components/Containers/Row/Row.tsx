import { useFormat } from "../../../core/format"
import { Flex } from "../Flex/Flex"
import { RowProps } from "./Row.interface"
import styles from './Row.module.scss';

export const Row = (props: RowProps) => {

    const { classes } = useFormat()

    return (
        <Flex {...props}  
            className={classes(
                styles.row, 
                props.className
            )} 
            flexWrap="wrap" 
        />
    )
}