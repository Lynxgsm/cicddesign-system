import { useFormat } from '../../../core/format'
import { Block } from '../Block/Block'
import { Flex } from '../Flex/Flex'
import { CollapsibleProps } from './Collapsible.interface'
import styles from './Collapsible.module.scss'

export const Collapsible = ({children, open, type, gap}: CollapsibleProps) => {
    
    const { classes } = useFormat()
    
    return (
        <Flex className={classes(
                styles.collapsible,
                styles[`collapsible-${type || 'default'}`],
                styles[`collapsible-${open ? 'open' : 'close'}`]
            )}
            flexDirection="column"
            gap={gap || 16}
        >
            <Block className='mt-2'>{children[0]}</Block>
            <Block className={styles['collapsible-body']}>{children[1]}</Block>
        </Flex>
    )
}