import { Container } from "../container/Container";
import styles from "./style.module.css";
import { motion } from "framer-motion";

const Animation = {
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

const revAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, ease: "easeOut" },
  }),
};

export default function Buy() {
  return (
    <motion.section
      className={styles.buy}
      viewport={{ amount: 0.3, once: true }}
      initial="hidden"
      whileInView="visible"
    >
      <Container>
        <motion.h3
          className={styles.buy__title}
          variants={Animation}
          custom={1.3}
        >
          Buy OnlyFans Likes
        </motion.h3>
        <div className={styles.buy__box}>
          <div className={styles.buy__info}>
            <motion.button
              className={styles.info__btn}
              variants={revAnimation}
              custom={1.3}
            >
              300 OnlyFans Likes
            </motion.button>
            <motion.div
              className={styles.flex_group}
              variants={revAnimation}
              custom={1.3}
            >
              <p className={styles.product__price}>
                <span className={styles.visually_hidden}>Curent price:</span>
                $24.99
              </p>
              <p className={styles.product__original_price}>
                <span className={styles.visually_hidden}>Original price:</span>
                <s>$50</s>
              </p>
            </motion.div>
            <ul className={styles.buy__list}>
              <motion.li
                className={styles.list__item}
                variants={revAnimation}
                custom={1.4}
              >
                300 Likes Spread Across Your Posts
              </motion.li>
              <motion.li
                className={styles.list__item}
                variants={revAnimation}
                custom={1.5}
              >
                No Password Required
              </motion.li>
              <motion.li
                className={styles.list__item}
                variants={revAnimation}
                custom={1.6}
              >
                100% Real-Looking Likes
              </motion.li>
              <motion.li
                className={styles.list__item}
                variants={revAnimation}
                custom={1.7}
              >
                Likes Remain Forever
              </motion.li>
              <motion.li
                className={styles.list__item}
                variants={revAnimation}
                custom={1.8}
              >
                Minimum 10 Posts Required (Not-PPV)
              </motion.li>
              <motion.li
                className={styles.list__item}
                variants={revAnimation}
                custom={1.9}
              >
                Safe Payments via Stripe©
              </motion.li>
            </ul>
            <motion.button
              className={styles.buy__btn}
              variants={revAnimation}
              custom={2.3}
            >
              Buy Now!
            </motion.button>
          </div>
          <motion.div
            className={styles.img__box}
            variants={Animation}
            custom={2.5}
          >
            <img
              src="public/buy/buy-mob.png"
              alt="imag"
              width="689"
              height="712"
            />
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
