import Link from "next/link";
import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./MenuButton.module.scss";

interface MenuButtonProps {
  icon: ReactNode;
  link: string;
  text?: string;
  border?: "radius" | "noRadius";
  show?: "none" | "block";
  background: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  link,
  text,
  border = "radius",
  show = "none",
  background,
}) => {
  return (
    <Link href={link} className={styles.menuButton}>
      <div className={clsx(styles.icon, styles[border])} style={{ background }}>
        {icon}
      </div>
      <div className={ styles[show]}>
        <p className={styles.text}>{text}</p>
      </div>
    </Link>
  );
};

export default MenuButton;
