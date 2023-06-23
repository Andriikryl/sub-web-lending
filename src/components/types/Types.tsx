import { Container } from "../container/Container";
import styles from "./style.module.css";
export default function Types() {
  return (
    <div className={styles.types}>
      <Container>
        <div className={styles.types__box}>
          <ul className={styles.types__list}>
            <li className={styles.list__item}>
              <div className={styles.list__img}>
                <img src="public/types/Star.svg" alt="img" />
              </div>
              <h3 className={styles.list__title}>4.9/5</h3>
              <p className={styles.list__descr}>
                Your profile's in safe hands - we stick strictly to OnlyFans'
                legal and official methods.
              </p>
            </li>
            <li className={styles.list__item}>
              <div className={styles.list__img}>
                <img src="public/types/save.svg" alt="img" />
              </div>
              <h3 className={styles.list__title}>Secure Card Payments</h3>
              <p className={styles.list__descr}>
                Your profile's in safe hands - we stick strictly to OnlyFans'
                legal and official methods.
              </p>
            </li>
            <li className={styles.list__item}>
              <div className={styles.list__img}>
                <img src="public/types/secur.svg" alt="img" />
              </div>
              <h3 className={styles.list__title}>OnlyFans Safe</h3>
              <p className={styles.list__descr}>
                Your profile's in safe hands - we stick strictly to OnlyFans'
                legal and official methods.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
