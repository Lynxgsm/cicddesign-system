import React from "react";
import { TypographyProps, map } from "./Typography.interface";
import { useFormat } from "../../core/format";
import styles from "./Typography.module.scss";

export const Typography = ({
  variant,
  colorScheme,
  fontFamily,
  underline,
  children,
  width,
  truncated,
  weight,
  className
}: TypographyProps) => {
  const { classes } = useFormat();

  return React.createElement(
    map(variant),
    {
      className: classes(
        styles[variant || "body"],
        styles[`text-${colorScheme || "black"}`],
        styles[fontFamily || "roboto"],
        { [styles["underline"]]: underline },
        { [styles["truncated"]]: truncated },
        { [styles[`${weight}`]]: weight },
        className
      ),
      style: { width },
    },
    children
  );
};
