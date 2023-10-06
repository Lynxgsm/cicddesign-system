import { useFormat } from "../../../core/format";
import { Flex } from "../../Containers/Flex/Flex";
import { Typography } from "../../Typography/Typography";
import { ListTileProps } from "./ListTile.interface";
import styles from "./ListTile.module.scss";

export const ListTile = ({
  children,
  leading,
  trailing,
  width,
  onClick,
  title,
}: ListTileProps) => {
  const { classes, unitFormatter } = useFormat();

  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={classes(styles["tile-container"], {
        [styles.enabled]: onClick,
      })}
      style={{ width: width ? unitFormatter(width) : "100%" }}
    >
      <Flex
        className={styles.tile}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center" gap={16}>
          <div>{leading}</div>
          <Flex flexDirection="column">
            <Typography variant="h6" fontFamily="roboto" weight="medium">
              {title}
            </Typography>
            {children}
          </Flex>
        </Flex>
        <div>{trailing}</div>
      </Flex>
    </button>
  );
};
