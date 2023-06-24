import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function Questions() {
  return (
    <section className={styles.questions}>
      <Container>
        <h3 className={styles.questions__title}>Frequently Asked Questions</h3>
        <div className={styles.questions__box}>
          <details className={styles.accordion}>
            <summary className={styles.accordion__control}>
              <h3 className={styles.accordion__title}>
                What are the OnlyFans Likes?
              </h3>
              <span className={styles.accordion__icon}></span>
            </summary>
            <div className={styles.accordion__content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </details>
          <details className={styles.accordion}>
            <summary className={styles.accordion__control}>
              <h3 className={styles.accordion__title}>
                Can you deliver likes/comments to the locked/paid posts?
              </h3>
              <span className={styles.accordion__icon}></span>
            </summary>
            <div className={styles.accordion__content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </details>
          <details className={styles.accordion}>
            <summary className={styles.accordion__control}>
              <h3 className={styles.accordion__title}>
                After order is completed, is it guaranteed that these
                subscribers will continue to like/comment posts on my OnlyFans
                profile?
              </h3>
              <span className={styles.accordion__icon}></span>
            </summary>
            <div className={styles.accordion__content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </details>
          <details className={styles.accordion}>
            <summary className={styles.accordion__control}>
              <h3 className={styles.accordion__title}>
                If I buy subscribers or likes, do I have the risk that my
                onlyfans profile will be banned?
              </h3>
              <span className={styles.accordion__icon}></span>
            </summary>
            <div className={styles.accordion__content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </details>
          <details className={styles.accordion}>
            <summary className={styles.accordion__control}>
              <h3 className={styles.accordion__title}>
                How would I start earning/making money with these subscribers?
              </h3>
              <span className={styles.accordion__icon}></span>
            </summary>
            <div className={styles.accordion__content}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </details>
        </div>
      </Container>
    </section>
  );
}
