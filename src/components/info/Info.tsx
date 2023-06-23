import { Container } from "../container/Container";
import styles from "./style.module.css";

export default function Info() {
  return (
    <section className={styles.info}>
      <Container>
        <h3 className={styles.info__title}>Why You Need OnlyFans Likes?</h3>
        <h4 className={styles.sub__title}>What are the OnlyFans Likes?</h4>
        <p className={styles.info__descr}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h4 className={styles.sub__title}>Benefits of OnlyFans Likes</h4>
        <p className={styles.info__descr}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit... read more
        </p>
      </Container>
    </section>
  );
}
