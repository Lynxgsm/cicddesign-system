import { useFormat } from '../../../core/format';
import { Block } from '../../Containers/Block/Block';
import { Flex } from '../../Containers/Flex/Flex';
import { Typography } from '../../Typography/Typography';
import styles from './Blockquote.module.scss'
import { BlockquoteProps } from './Blockquote.interface';

export const Blockquote = ({children, title, iconPosition, maxWidth, type, border, icon, decorationPosition}: BlockquoteProps) => {

    const { classes, unitFormatter, parseIcon } = useFormat()
    
    return (
        <Flex role="banner" gap={16}
            className={classes(
                styles.blockquote, 
                styles[`blockquote-${iconPosition || 'top'}`],
                styles[`blockquote-decorated-${decorationPosition || 'left'}`],
                styles[`blockquote-${type || 'info'}`],
                {[styles['blockquote-bordered']]: border}
            )}
            style={{maxWidth: maxWidth && unitFormatter(maxWidth)}}
        >
            {icon && <Block>{parseIcon(icon)}</Block>}
            <Block>
                <Typography variant="h6">{title}</Typography>
                <>{children}</>
            </Block>
        </Flex>
    )
}