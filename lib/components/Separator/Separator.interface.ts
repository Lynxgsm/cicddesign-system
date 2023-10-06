import { ColorScheme } from "../../types/common/color-scheme";
import { IBox } from '../Containers/Container.interface';

export interface SeparatorProps extends IBox {
    spacing: string 
    colorScheme: ColorScheme
}