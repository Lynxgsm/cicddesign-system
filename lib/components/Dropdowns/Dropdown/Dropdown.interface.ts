import { ReactElement } from "react";
import { ColorScheme } from "../../../types/color-scheme";
import { UnitString } from "../../../types/common/unit-string";

export interface DropdownProps {
  button: JSX.Element;
  children?: ReactElement | ReactElement[];
  top?: UnitString;
  left?: UnitString;
  decorated?: boolean;
  colorScheme?: ColorScheme;
  onClick?: (close: boolean) => void;
  arrowPosition?: "left" | "right";
  backdrop?: boolean;
}
