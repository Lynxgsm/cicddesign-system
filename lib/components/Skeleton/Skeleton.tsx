import styles from "./Skeleton.module.scss";
import { useFormat } from "../../core/format";
import { SkeletonProps } from "./Skeleton.interface";

export const Skeleton = ({
  animated,
  radius = "default",
  height = "30px",
  width = "auto",
}: SkeletonProps) => {
  const { classes } = useFormat();

  return (
    <div
      className={classes(
        styles["skeleton"],
        styles[`border-${radius || "none"}`],
        animated ? styles["animated"] : ""
      )}
      style={{ height, width }}
    ></div>
  );
};
