import { Container } from "../container/Container";
import Suo from "../icons/Suo";
import Tel from "../icons/Tel";
import styles from "./style.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__top}>
          <div className={styles.footer__text}>
            <h3 className={styles.footer__title}>Contact us</h3>
            <p className={styles.footer__desc}>
              Please get in touch and our expert support team will answer all
              your questions.
            </p>
          </div>
          <div className={styles.footer__cont}>
            <div className={styles.flex__groop}>
              <div className={styles.icon__box}>
                <Suo />
              </div>
              <a className={styles.fot__link} href="#">
                support@subscribers.top
              </a>
            </div>
            <div className={styles.flex__groop}>
              <div className={styles.icon__box}>
                <Tel />
              </div>
              <a className={styles.fot__link} href="#">
                @subscribers_top
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__list__grup}>
            <ul>
              <li>
                <a className={styles.footer__nav__link} href="#">
                  Terms And Conditions
                </a>
              </li>
              <li>
                <a className={styles.footer__nav__link} href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className={styles.footer__nav__link} href="#">
                  Refund Policy
                </a>
              </li>
              <li>
                <a className={styles.footer__nav__link} href="#">
                  Cookies Policy
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className={styles.footer__nav__link} href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className={styles.footer__nav__link} href="#">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
          <span className={styles.footer__rit}>
            All rights reserved © subscribers.top
          </span>
        </div>
      </Container>
    </footer>
  );
}
