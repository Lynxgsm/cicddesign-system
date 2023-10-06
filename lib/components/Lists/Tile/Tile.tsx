import { useFormat } from '../../../core/format';
import { Flex } from '../../Containers/Flex/Flex';
import { TileProps } from './Tile.interface';
import styles from './Tile.module.scss';

export const Tile = ({children, leading, trailing, width, disabled, onClick}: TileProps) => {

    const { classes, unitFormatter } = useFormat()

    return (
        <button onClick={onClick} 
            disabled={disabled} 
            className={classes(styles['tile-container'], {[styles.enabled]: !disabled})}
            style={{width: width ? unitFormatter(width) : '100%'}}
        >
            <Flex className={styles.tile} 
                justifyContent="space-between" 
                alignItems="center"
            >
                <Flex alignItems="center" gap={16}>
                    <div>{leading}</div>
                    <div>{children}</div>
                </Flex>
                <div>{trailing}</div>
            </Flex>
        </button>
    )
}