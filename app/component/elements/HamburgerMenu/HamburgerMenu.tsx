import styles from "./HamburgerMenu.module.scss";

export default function HamburgerMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    // <nav
    //   className={`absolute bg-opacity-80 bg-black top-0 left-0 w-full h-full z-9 flex flex-col items-center justify-center gap-8 text-white text-2xl transition-transform duration-500 ${
    //     isOpen ? "translate-y-0" : "-translate-y-full"
    //   }`}
    // >
    <nav
      className={`${styles.menu} ${
        isOpen ? styles["menu--active"] : styles["menu"]
      }`}
    >
      <ul
        className={isOpen ? styles["menu__list--active"] : styles["menu__list"]}
      >
        <li
          className={
            isOpen ? styles["menu__item--active"] : styles["menu__item"]
          }
        >
          <a
            href="#landing"
            className={
              isOpen ? styles["menu__link--active"] : styles["menu__link"]
            }
          >
            Landing
          </a>
        </li>
        <li
          className={
            isOpen ? styles["menu__item--active"] : styles["menu__item"]
          }
        >
          <a
            href="#work"
            className={
              isOpen ? styles["menu__link--active"] : styles["menu__link"]
            }
          >
            Work
          </a>
        </li>
        <li
          className={
            isOpen ? styles["menu__item--active"] : styles["menu__item"]
          }
        >
          <a
            href="#about"
            className={
              isOpen ? styles["menu__link--active"] : styles["menu__link"]
            }
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
