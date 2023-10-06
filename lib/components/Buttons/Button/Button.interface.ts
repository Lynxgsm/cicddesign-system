import { ColorScheme } from "../../../types/color-scheme";
import { Size } from "../../../types/common/size";
import { UnitString } from "../../../types/common/unit-string";
import { Variant } from "../../../types/common/variants";
import { IconParams } from "../../../types/icons/icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  colorScheme?: ColorScheme;
  href?: string;
  radius?: UnitString;
  size?: Size;
  fullwidth?: boolean;
  leftIcon?: IconParams;
  rightIcon?: IconParams;
}
