import React from 'react';
import { Breakpoints } from '../../types/common/breakpoints';
import { ContainerType } from '../../types/common/container';

export interface IBox { breakpoints?: Breakpoints }
export interface IElement { element?: ContainerType, }

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, IBox, IElement {}
