import { useFormat } from '../../core/format'
import { IconProps } from './Icon.interface'
import styles from './Icon.module.scss'

export const Icon = ({name, size, variant}: IconProps) => {

    const { classes } = useFormat()

    return <i className={classes(
            styles.icon,
            styles[`icon-${name}-${variant || 'regular'}`],
            styles[`text-${size}`]
        )} 
    />
}