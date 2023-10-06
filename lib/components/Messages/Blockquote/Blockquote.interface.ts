import React from 'react'
import { MessageType } from '../../../types/common/message'
import { UnitString } from '../../../types/common/unit-string'
import { Size } from '../../../types/common/size'
import { IconParams } from '../../../types/icons/icon'

export interface BlockquoteProps {
    children?: React.ReactNode,
    title?: string,
    icon?: IconParams,
    radius?: Size,
    type?: MessageType,
    iconPosition?: 'left' | 'right',
    maxWidth?: UnitString,
    border?: boolean,
    decorationPosition?: 'top' | 'bottom' | 'left' | 'right'
} 