// css
import styles from "../css/card.module.css";

// react router dom
import { Link } from "react-router-dom";

function Card() {
  return (
    <section className={`${styles.card}  container`}>
      <div className={styles["first__card"]}>
        <div className={styles["first__card__img-wrapper"]}>
          <img
            className={styles["first__card__img"]}
            src="./assets/home/desktop/image-speaker-zx9.svg"
            alt="image-speaker"
          />
        </div>
        <div className={styles["first__card-content"]}>
          <h1 className={styles["first__card-title"]}>ZX9 SPEAKER</h1>
          <p className={styles["first__card-text"]}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/speakers" className={styles["card-link"]}>
            See Product
          </Link>
        </div>
      </div>
      <div className={styles["second__card"]}>
        <h4 className={styles["second__card-title"]}>ZX7 SPEAKER</h4>
        <Link to="/speakers" className={styles["card-link"]}>
          See Product
        </Link>
      </div>
      <div className={styles["last__card"]}>
        <div className={styles["last__card__img-wrapper"]}>
          <img
            className={styles["last__card__img"]}
            src="../assets/home/desktop/image-earphones-yx1.jpg"
            alt="earphones-img"
          />
        </div>
        <div className={styles["last__card__content"]}>
          <h4 className={styles["last__card-title"]}>YX1 EARPHONES</h4>
          <Link to="/earphones" className={styles["card-link"]}>
            See product
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Card;
