// css
import styles from "../css/featured.module.css";

// react router dom
import { Link } from "react-router-dom";

const products = [
  {
    img: "../assets/home/desktop/image-headphonse.png",
    text: "Headphones",
    shopLink: "/headphones",
  },
  {
    img: "../assets/home/desktop/image-speaker-zx9.png",
    text: "Speakers",
    shopLink: "/speakers",
  },
  {
    img: "../assets/home/desktop/image-earphones.png",
    text: "Earphones",
    shopLink: "/earphones",
  },
];

const ShopLink = ({ to }) => {
  return (
    <Link className={styles.shopLink} to={to}>
      <p>SHOP</p>
      <img src="../assets/next-path.svg" alt="next icon" />
    </Link>
  );
};

function Featured() {
  return (
    <ul className={`${styles.featured}   container`}>
      {products.map((product, index) => {
        return (
          <li className={styles["featured__item"]} key={index}>
            <img
              className={styles["featured__img"]}
              src={product.img}
              alt={product.text}
            />
            <p className={styles["featured__text"]}>
              {product.text.toUpperCase()}
            </p>
            <ShopLink to={product.shopLink} />
          </li>
        );
      })}
    </ul>
  );
}

export default Featured;
