import { useState } from "react";
import { Container } from "../container/Container";
import BurgerButton from "./BurgerButton";
import styles from "./style.module.css";

export default function Header() {
  const [activeState, setActiveState] = useState(false);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <a href="#" className={styles.header__logo}>
            <img src="public/header/logo.svg" alt="logo" />
          </a>
          <nav
            className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}
          >
            <ul className={styles.nav__list}>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  Buy OnlyFans Likes
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  Buy OnlyFans Subscribers
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  FAQ
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
}
