import { Container } from "../container/Container";
import styles from "./style.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__box}>
          <div className={styles.hero__info}>
            <motion.h1
              className={styles.hero__title}
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2.2 }}
            >
              Get 300 <span>OnlyFans</span> Likes - Absolutely Free!
            </motion.h1>
            <motion.p
              className={styles.hero__description}
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2.4 }}
            >
              Say goodbye to the ghost town that was your OnlyFans profile!
            </motion.p>
            <motion.p
              className={styles.hero__description}
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2.6 }}
            >
              A simple sprinkle of <span>300 likes </span>can work like magic,
              making your OnlyFans come alive!
            </motion.p>
            <div className={styles.hero__inerBox}>
              <div className={styles.form__box}>
                <motion.h2
                  className={styles.from__title}
                  initial={{ opacity: 0, y: 400 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 2.2 }}
                >
                  Just pop in your best email and the link to your OnlyFans
                  profile!
                </motion.h2>
                <form className={styles.hero__form} action="#">
                  <label className={styles.visually_hidden} htmlFor="">
                    Your email
                  </label>
                  <motion.input
                    initial={{ opacity: 0, y: 400 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 2.4 }}
                    className={styles.form__input}
                    type="email"
                    placeholder="Your email"
                  />
                  <label className={styles.visually_hidden} htmlFor="">
                    Your email
                  </label>
                  <motion.input
                    initial={{ opacity: 0, y: 400 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 2.6 }}
                    className={styles.form__input}
                    type="text"
                    placeholder="Your OnlyFans Profile"
                  />
                  <motion.button
                    className={styles.form__btn}
                    type="submit"
                    initial={{ opacity: 0, y: 400 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 2.8 }}
                  >
                    Get Free Likes!
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
          <motion.div
            className={styles.hero__img}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <img
              src="public/hero/like.png"
              width="149"
              height="149"
              alt="hero-image"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
