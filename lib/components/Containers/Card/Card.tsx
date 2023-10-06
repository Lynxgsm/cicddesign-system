import { useFormat } from "../../../core/format";
import { Block } from "../Block/Block";
import { CardProps } from "./Card.interface";
import styles from "./Card.module.scss";

// TODO: Change the name to Card
export const Card = ({ children, elevation, radius, ...props }: CardProps) => {
  const { classes } = useFormat();

  return (
    <Block
      {...props}
      className={classes(
        props.className,
        styles.card,
        styles[`card-${elevation || 0}`],
        styles[`border-${radius || "none"}`]
      )}
      style={{ ...props.style }}
    >
      {children}
    </Block>
  );
};
