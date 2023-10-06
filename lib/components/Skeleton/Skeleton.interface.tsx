
import { Size } from "../../types/common/size";
import { UnitString } from "../../types/common/unit-string";

export interface IAnimated{ animated?: boolean }

export type SkeletonProps = {
  animated?: boolean;
  radius?: Size;
  height?: UnitString;
  width?: UnitString;
};
