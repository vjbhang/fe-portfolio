"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HamburgerMenu.module.scss";

export default function HamburgerMenu({
  isOpen,
  setIsOpen: _setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [navVisible, setNavVisible] = useState(false);
  const [panelActive, setPanelActive] = useState(false);
  const [panelOffLeft, setPanelOffLeft] = useState(false);
  const [panelNoTransition, setPanelNoTransition] = useState(false);

  const hadOpenedRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      hadOpenedRef.current = true;
      setNavVisible(true);
      setPanelOffLeft(false);
      setPanelNoTransition(false);
      setPanelActive(false);
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setPanelActive(true));
      });
      return () => cancelAnimationFrame(id);
    }

    if (hadOpenedRef.current) {
      hadOpenedRef.current = false;
      setPanelActive(false);
      setPanelOffLeft(true);
    }
  }, [isOpen]);

  const handlePanelTransitionEnd = (
    e: React.TransitionEvent<HTMLDivElement>,
  ) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "transform") return;
    if (isOpen || !panelOffLeft) return;

    setPanelNoTransition(true);
    setPanelOffLeft(false);
    setNavVisible(false);
    requestAnimationFrame(() => {
      setPanelNoTransition(false);
    });
  };

  return (
    <nav
      className={`z-8 ${styles.menu} ${navVisible ? styles["menu--active"] : ""}`}
    >
      <div
        className={`${styles.menu__panel} ${panelActive ? styles["menu__panel--active"] : ""} ${
          panelOffLeft ? styles["menu__panel--offLeft"] : ""
        } ${panelNoTransition ? styles["menu__panel--noTransition"] : ""}`}
        onTransitionEnd={handlePanelTransitionEnd}
      >
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a
              href="#landing"
              className={`${styles.menu__link} font-inconsolata`}
            >
              Landing
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#work" className={`${styles.menu__link} font-inconsolata`}>
              Work
            </a>
          </li>
          <li className={styles.menu__item}>
            <a
              href="#about"
              className={`${styles.menu__link} font-inconsolata`}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
