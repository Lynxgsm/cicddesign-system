import { MessageType } from '../../../types/common/message'
import { Size } from '../../../types/common/size'
import { IconParams } from '../../../types/icons/icon'

export interface BadgeProps {
    size?: Size 
    type?: MessageType 
    icon?: IconParams
    iconPosition?: 'left' | 'right'
    radius?: Size
    children?: string
}