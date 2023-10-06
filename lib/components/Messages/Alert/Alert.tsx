import { useFormat } from "../../../core/format";
import { Block } from "../../Containers/Block/Block";
import { Flex } from "../../Containers/Flex/Flex";
import { Typography } from "../../Typography/Typography";
import { AlertProps } from "./Alert.interface";
import styles from "./Alert.module.scss";

export const Alert = ({
  children,
  title,
  iconPosition,
  radius,
  maxWidth,
  type,
  border,
  icon,
}: AlertProps) => {
  const { classes, unitFormatter, parseIcon } = useFormat();

  return (
    <Flex
      role="banner"
      gap={16}
      className={classes(
        styles.alert,
        styles[`alert-${iconPosition || "top"}`],
        styles[`alert-${type || "info"}`],
        { [styles["alert-bordered"]]: border },
        styles[`border-${radius || "none"}`]
      )}
      style={{ maxWidth: maxWidth && unitFormatter(maxWidth) }}
    >
      {icon && <Block>{parseIcon(icon)}</Block>}
      <Block>
        <Typography variant="h6">{title}</Typography>
        <Block>{children}</Block>
      </Block>
    </Flex>
  );
};
