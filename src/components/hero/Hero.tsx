import { Container } from "../container/Container";
import Timer from "./Timer";
import styles from "./style.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__box}>
          <div className={styles.hero__info}>
            <h1 className={styles.hero__title}>
              Get 300 <span>OnlyFans</span> Likes - Absolutely Free!
            </h1>
            <p className={styles.hero__description}>
              Say goodbye to the ghost town that was your OnlyFans profile!
            </p>
            <p className={styles.hero__description}>
              A simple sprinkle of <span>300 likes </span>can work like magic,
              making your OnlyFans come alive!
            </p>
            <div className={styles.hero__inerBox}>
              <div className={styles.form__box}>
                <h2 className={styles.from__title}>
                  Just pop in your best email and the link to your OnlyFans
                  profile!
                </h2>
                <form className={styles.hero__form} action="#">
                  <label className={styles.visually_hidden} htmlFor="">
                    Your email
                  </label>
                  <input
                    className={styles.form__input}
                    type="email"
                    placeholder="Your email"
                  />
                  <label className={styles.visually_hidden} htmlFor="">
                    Your email
                  </label>
                  <input
                    className={styles.form__input}
                    type="text"
                    placeholder="Your OnlyFans Profile"
                  />
                  <button className={styles.form__btn} type="submit">
                    Get Free Likes!
                  </button>
                </form>
              </div>
              <Timer />
            </div>
          </div>
          <div className={styles.hero__img}>
            <img
              src="public/hero/like.png"
              width="149"
              height="149"
              alt="hero-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
