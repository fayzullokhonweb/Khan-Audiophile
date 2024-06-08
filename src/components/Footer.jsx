//css
import styles from "../css/footer.module.css";
import NavLinks from "./NavLinks";

function Footer({ none, margin }) {
  return (
    <>
      <section
        style={{ marginBottom: margin }}
        className={`${styles.about} container`}
      >
        <div style={{ display: none }} className={styles["about__content"]}>
          <h2 className={styles["about__content-title"]}>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p className={styles["about__content-text"]}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div style={{ display: none }} className={styles["about__img-wrapper"]}>
          <img
            className={styles["about__img"]}
            src="../assets/shared/desktop/image-best-gear.jpg"
            alt="image"
          />
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles["footer__line"]}></div>
        <div className={`${styles["footer__container "]} container`}>
          <div className={styles.navList}>
            <img
              className={styles["footer__content-icon"]}
              src="../assets/audiophile.svg"
              alt="icon"
            />
            <NavLinks />
          </div>
          <div className={styles["footer__socials-wrapper"]}>
            <div>
              <p className={styles["footer__content-text"]}>
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
              <p className={styles["footer__content-copyright"]}>
                Copyright 2021. All Rights Reserved
              </p>
            </div>
            <div className={styles["footer__socials"]}>
              <img
                src="../assets/shared/desktop/icon-facebook.svg"
                alt="facebook-icon"
              />
              <img
                src="../assets/shared/desktop/icon-instagram.svg"
                alt="instagram-icon"
              />
              <img
                src="../assets/shared/desktop/icon-twitter.svg"
                alt="twitter-icon"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
