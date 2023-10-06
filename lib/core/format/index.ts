import { classes } from "./classes/classes";
import { unitFormatter } from "./unit/unit";
import { parseIcon } from "./parse-icon/parser-icon";

export function useFormat() {
  return {
    classes,
    unitFormatter,
    parseIcon,
  };
}
