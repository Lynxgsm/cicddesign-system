import { Block } from '../../Containers/Block/Block'
import styles from './TileGroup.module.scss'
import { ContainerProps } from '../../Containers/Container.interface'
import { useFormat } from '../../../core/format'

export const TileGroup = (props: ContainerProps) => {

    const { classes } = useFormat()

    return (
        <Block {...props} 
            className={classes(styles['tile-group'], props.className)} />
    )
}