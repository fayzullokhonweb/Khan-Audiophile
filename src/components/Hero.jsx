// react router dom
import { Link } from "react-router-dom";

// css
import styles from "../css/hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={` ${styles.hero__container}  container`}>
        <div className={styles.hero__content}>
          <p className={styles["hero__content-text"]}>NEW PRODUCT</p>
          <h1 className={styles["hero__content-title"]}>
            XX99 Mark II Headphones
          </h1>
          <p className={styles["hero__content-desc"]}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link className={styles["hero__link"]}>SEE PRODUCT</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
