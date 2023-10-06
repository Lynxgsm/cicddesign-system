import { SeparatorProps } from "./Separator.interface";
import styles from "./Separator.module.scss";
import { Flex } from '../Containers/Flex/Flex';

export const Separator = ({
  spacing,
  colorScheme,
  ...props
}: SeparatorProps) => {

  return (
    <Flex {...props}
      className={styles.separator}
      justifyContent="center"
      style={{marginLeft: spacing , marginRight: spacing }}
    >
      |
    </Flex>
  );
};
