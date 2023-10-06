import { Block } from '../../Block/Block'
import { Flex } from '../../Flex/Flex'
import { CollapsibleHeaderProps } from '../Collapsible.interface'
import styles from '../Collapsible.module.scss'

export const CollapsibleHeader = ({children, openIcon, closeIcon, ...props}: CollapsibleHeaderProps) => {
    return (
        <Flex className={styles['collapsible-header']} 
            justifyContent="space-between" 
            {...props}>
            {children}
            <Block className={styles['open-icon']}>{openIcon}</Block>
            <Block className={styles['close-icon']}>{closeIcon}</Block>
        </Flex>
    )
}