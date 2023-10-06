"use client";

import styles from "./Dropdown.module.scss";
import { useState } from "react";
import { Flex } from "../../Containers/Flex/Flex";
import { DropdownProps } from "./Dropdown.interface";
import { useFormat } from "../../../core/format";
import { Block } from "../../Containers/Block/Block";

export const Dropdown = ({
  button,
  children,
  top,
  left,
  decorated,
  colorScheme,
  backdrop,
  onClick,
  arrowPosition,
}: DropdownProps) => {
  const { classes, unitFormatter } = useFormat();
  const [close, setClose] = useState(true);

  const toggle = () => {
    setClose(!close);
    onClick && onClick(!close);
  };

  return (
    <Flex role="group" className={styles["dropdown-wrapper"]}>
      <button onClick={toggle} className={styles["dropdown-button"]}>
        {button}
      </button>
      <Block
        role="dialog"
        style={{
          transform: `translate(${unitFormatter(left)}, ${unitFormatter(
            top || 40
          )})`,
        }}
        className={classes(
          styles.dropdown,
          { [styles["decorated"]]: decorated },
          styles[arrowPosition || "left"],
          styles[`dropdown-${colorScheme || "supernova"}`],
          { [styles["close"]]: close }
        )}
      >
        {children}
      </Block>
      <Block
        role="complementary"
        onFocus={() => setClose(!close)}
        onClick={() => setClose(!close)}
        className={classes(
          styles.backdrop,
          { [styles["close"]]: close },
          { [styles["backdrop-visible"]]: backdrop }
        )}
        tabIndex={0}
      ></Block>
    </Flex>
  );
};
