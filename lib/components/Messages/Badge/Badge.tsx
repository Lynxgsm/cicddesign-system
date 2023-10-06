import { useFormat } from '../../../core/format'
import { Flex } from '../../Containers/Flex/Flex'
import { BadgeProps } from './Badge.interface'
import styles from './Badge.module.scss'

export const Badge = ({size, type, icon, iconPosition, children}: BadgeProps) => {
    const { classes, parseIcon } = useFormat()

    return (
        <Flex className={classes(
                styles.badge,
                styles[`badge-${type || 'info'}`],
                styles[`badge-${size || 'm'}`]
            )}
            flexDirection={`${iconPosition === 'left' ? 'row' : 'row-reverse'}`}
            alignItems="center"
        >
            {icon && parseIcon(icon)}
            <span>{children}</span>
        </Flex>
    )
}