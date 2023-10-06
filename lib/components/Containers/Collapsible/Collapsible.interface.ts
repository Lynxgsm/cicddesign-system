import React, { ReactNode } from 'react';
import { MessageType } from '../../../types/common/message'
import { UnitString } from '../../../types/common/unit-string';


export interface CollapsibleHeaderProps extends React.HTMLAttributes<HTMLDivElement>{
    children?: React.ReactNode,
    openIcon: React.ReactNode,
    closeIcon: React.ReactNode,
}

export interface CollapsibleProps {
    open?: boolean,
    children: [ReactNode, ReactNode],
    type?: MessageType,
    gap?: UnitString,
}