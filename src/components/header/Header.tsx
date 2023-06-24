import { useState } from "react";
import { Container } from "../container/Container";
import BurgerButton from "./BurgerButton";
import styles from "./style.module.css";
import { motion } from "framer-motion";

const linksAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, ease: "easeOut" },
  }),
};

export default function Header() {
  const [activeState, setActiveState] = useState(false);

  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <motion.header
      className={styles.header}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>
        <div className={styles.header__box}>
          <motion.a
            href="#"
            className={styles.header__logo}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <img src="./image/logo.svg" alt="logo" />
          </motion.a>
          <nav
            className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}
          >
            <ul className={styles.nav__list}>
              <motion.li
                className={styles.list__item}
                variants={linksAnimation}
                custom={3}
              >
                <motion.a className={styles.list__link} href="#">
                  Buy OnlyFans Likes
                </motion.a>
              </motion.li>
              <motion.li
                className={styles.list__item}
                variants={linksAnimation}
                custom={3.3}
              >
                <motion.a className={styles.list__link} href="#">
                  Buy OnlyFans Subscribers
                </motion.a>
              </motion.li>
              <motion.li
                className={styles.list__item}
                variants={linksAnimation}
                custom={3.3}
              >
                <motion.a className={styles.list__link} href="#">
                  FAQ
                </motion.a>
              </motion.li>
              <motion.li
                className={styles.list__item}
                variants={linksAnimation}
                custom={3.6}
              >
                <motion.a className={styles.list__link} href="#">
                  Contact Us
                </motion.a>
              </motion.li>
            </ul>
          </nav>
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </motion.header>
  );
}
