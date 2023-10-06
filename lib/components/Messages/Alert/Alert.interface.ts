import { MessageType } from "../../../types/common/message";
import { UnitString } from "../../../types/common/unit-string";
import { Size } from "../../../types/common/size";
import { IconParams } from "../../../types/icons/icon";

export interface AlertProps {
  children?: React.ReactNode;
  title?: String;
  icon?: IconParams;
  radius?: Size;
  type?: MessageType;
  iconPosition?: "left" | "right";
  maxWidth?: UnitString;
  border?: boolean;
}
