import { ContainerProps } from "../Container.interface";

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |  9 | 10 |  11 | 12 | 'auto'

export interface IColumn{
    col?: Size
    xl?: Size,
    l?: Size,
    m?: Size,
    s?: Size,
    xs?: Size,
}

export interface ColumnProps extends ContainerProps, IColumn{}