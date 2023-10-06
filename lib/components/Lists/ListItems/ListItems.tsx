import { useFormat } from "../../../core/format";
import { Block } from '../../Containers/Block/Block';
import { Flex } from "../../Containers/Flex/Flex";
import { Typography } from "../../Typography/Typography";
import { ListItemsProps } from "./ListItems.interface";
import styles from "./ListItems.module.scss";

export const ListItems = ({
  children,
  leading,
  width,
  title,
}: ListItemsProps) => {
  const { classes, unitFormatter } = useFormat();

  return (
    <button

      className={classes(styles["tile-container"], {

      })}
      style={{ width: width ? unitFormatter(width) : "100%" }}
    >
      <Flex
        className={styles.tile}
        justifyContent="space-between"
        alignItems="center"

      >
        <Flex  alignItems="flex-start" gap={16}>
          <Block>{leading}</Block>
          <Flex flexDirection="column">
            <Typography variant="h6" fontFamily="roboto" weight="medium">
              {title}
            </Typography>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </button>
  );
};
