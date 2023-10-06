import styles from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.interface";
import { useFormat } from "../../../core/format";

export const Navbar = ({
  children,
  position,
  decoration,
  style,
  colorScheme,
}: NavbarProps) => {
  const { classes } = useFormat();

  return (
    <nav
      className={classes(
        styles.navbar,
        styles[position || "relative"],
        styles[`decoration-${decoration || "none"}`],
        styles[`navbar-${colorScheme || "supernova"}`]
      )}
      style={style}
    >
      {children}
    </nav>
  );
};
