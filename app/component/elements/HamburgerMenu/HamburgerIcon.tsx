"use client";

import styles from "./HamburgerIcon.module.scss";

interface HamburgerIconProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerIcon({
  isOpen,
  setIsOpen,
}: HamburgerIconProps) {
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${styles.burger} ${isOpen ? styles["burger--close"] : ""}`}
      onClick={toggleMenu}
    >
      <div className={styles.burger__patty}></div>
      <div className={styles.burger__patty}></div>
      <div className={styles.burger__patty}></div>
    </div>
  );
}
