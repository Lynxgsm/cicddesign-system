import { Size } from '../../../types/common/size';
import { ContainerProps } from "../Container.interface";

export interface CardProps extends ContainerProps {
    elevation?: 0 | 1 | 2 | 3 | 4,
    radius?: Size,
}