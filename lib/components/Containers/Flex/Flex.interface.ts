import { UnitString } from "../../../types/common/unit-string";
import { ContainerProps } from "../Container.interface";

export interface FlexProps extends ContainerProps {
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  gap?: UnitString;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
}
