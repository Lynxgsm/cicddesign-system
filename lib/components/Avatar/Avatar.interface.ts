import { ColorScheme } from "../../types/common/color-scheme";
import { Size } from "../../types/common/size";

export interface AvatarProps {
  backgroundColor?: ColorScheme;
  backgroundImage?: string;
  textContent?: string;
  variant?: "rectangle" | "circle" | "square";
  size?: Size;
}
