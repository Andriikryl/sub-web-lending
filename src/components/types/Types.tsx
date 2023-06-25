import { Container } from "../container/Container";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import Star from "./images/Star.svg";
import Secur from "./images/secur.svg";

const Animation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, ease: "easeOut" },
  }),
};

export default function Types() {
  return (
    <motion.div
      className={styles.types}
      viewport={{ amount: 0.3, once: true }}
      initial="hidden"
      whileInView="visible"
    >
      <Container>
        <div className={styles.types__box}>
          <ul className={styles.types__list}>
            <motion.li
              className={styles.list__item}
              variants={Animation}
              custom={1.3}
            >
              <div className={styles.list__img}>
                <img src={Star} alt="img" />
              </div>
              <h3 className={styles.list__title}>4.9/5</h3>
              <p className={styles.list__descr}>
                Your profile's in safe hands - we stick strictly to OnlyFans'
                legal and official methods.
              </p>
            </motion.li>
            <motion.li
              className={styles.list__item}
              variants={Animation}
              custom={1.5}
            >
              <div className={styles.list__img}>
                <img src="./images/save.svg" alt="img" />
              </div>
              <h3 className={styles.list__title}>Secure Card Payments</h3>
              <p className={styles.list__descr}>
                Your profile's in safe hands - we stick strictly to OnlyFans'
                legal and official methods.
              </p>
            </motion.li>
            <motion.li
              className={styles.list__item}
              variants={Animation}
              custom={1.7}
            >
              <div className={styles.list__img}>
                <img src={Secur} alt="img" />
              </div>
              <h3 className={styles.list__title}>OnlyFans Safe</h3>
              <p className={styles.list__descr}>
                Your profile's in safe hands - we stick strictly to OnlyFans'
                legal and official methods.
              </p>
            </motion.li>
          </ul>
        </div>
      </Container>
    </motion.div>
  );
}
