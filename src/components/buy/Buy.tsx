import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function Buy() {
  return (
    <section className={styles.buy}>
      <Container>
        <h3 className={styles.buy__title}>Buy OnlyFans Likes</h3>
        <div className={styles.buy__box}>
          <div className={styles.buy__info}>
            <button className={styles.info__btn}>300 OnlyFans Likes</button>
            <div className={styles.flex_group}>
              <p className={styles.product__price}>
                <span className={styles.visually_hidden}>Curent price:</span>
                $24.99
              </p>
              <p className={styles.product__original_price}>
                <span className={styles.visually_hidden}>Original price:</span>
                <s>$50</s>
              </p>
            </div>
            <ul className={styles.buy__list}>
              <li className={styles.list__item}>
                300 Likes Spread Across Your Posts
              </li>
              <li className={styles.list__item}>No Password Required</li>
              <li className={styles.list__item}>100% Real-Looking Likes</li>
              <li className={styles.list__item}>Likes Remain Forever</li>
              <li className={styles.list__item}>
                Minimum 10 Posts Required (Not-PPV)
              </li>
              <li className={styles.list__item}>Safe Payments via Stripe©</li>
            </ul>
            <button className={styles.buy__btn}>Buy Now!</button>
          </div>
          <div>
            <img
              src="public/buy/buy-mob.png"
              alt="imag"
              width="689"
              height="712"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
