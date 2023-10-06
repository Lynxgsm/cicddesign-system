import { useFormat } from "../../core/format";
import { Flex } from "../Containers/Flex/Flex";
import { AvatarProps } from "./Avatar.interface";
import styles from "./Avatar.module.scss";

export const Avatar = ({
  backgroundColor,
  textContent,
  variant,
  backgroundImage,
  size,
}: AvatarProps) => {
  const { classes } = useFormat();
  return (
    <Flex
      className={classes(
        styles.avatar,
        styles[`avatar-${backgroundColor || "supernova"}`],
        styles[`avatar-${variant}`]
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      justifyContent="center"
      alignItems="center"
    >
      <strong
        className={classes(styles[`text-${size || "m"}`], {
          [styles[`visibility-none`]]: backgroundImage,
        })}
      >
        <div>{textContent}</div>
      </strong>
    </Flex>
  );
};
