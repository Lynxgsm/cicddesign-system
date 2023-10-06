import { UnitString } from "../../../types/common/unit-string";

export const unitFormatter = (size: UnitString = 0, unit: string = 'px') => (typeof size === 'number') ? `${size}${unit}` : size