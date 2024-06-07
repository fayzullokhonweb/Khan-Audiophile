// react
import { useState } from "react";

// utils
import { formatPrice } from "../utils";

// redux toolkit
import { useDispatch } from "react-redux";

// slice
import { addProduct } from "../features/productsSlice";

//react router dom
import { Link } from "react-router-dom";

// css
import styles from "../css/details.module.css";

function Details({
  gallery,
  categoryImage,
  slug,
  description,
  features,
  price,
  includes,
  others,
}) {
  const dollarAmount = formatPrice(price);
  const { first, second, third } = gallery;

  const dispatch = useDispatch();
  const [productAmount, setProductAmount] = useState(1);

  const setAmount = (type) => {
    if (type === "decrease" && productAmount > 1) {
      setProductAmount((prev) => prev - 1);
    } else if (type === "increase" && productAmount < 9) {
      // updated limit
      setProductAmount((prev) => prev + 1);
    }
  };

  const addToBag = () => {
    const newProduct = {
      amount: productAmount,
      slug: slug,
      price: dollarAmount,
      image: `.${categoryImage.desktop}`,
    };

    dispatch(addProduct(newProduct));

    // Save to localStorage
    localStorage.setItem("cartProduct", JSON.stringify(newProduct));

    setProductAmount(0);
  };

  return (
    <div>
      <div className="container">
        <Link to="/" className="goBack">
          Go back
        </Link>
        <div className={styles.about}>
          <div className={styles["about__img-wrapper"]}>
            <img
              className={styles["about__img"]}
              src={`.${categoryImage.desktop}`}
              alt=""
            />
          </div>

          <div className={styles["about__content"]}>
            <p className={styles["about__content-text"]}>new Product</p>
            <h2 className={styles["about__content-title"]}>{slug}</h2>
            <p className={styles["about__content-description"]}>
              {description}
            </p>
            <h6 className={styles["about__price"]}>{dollarAmount}</h6>
            <div className={styles.addCartChild}>
              <div className={styles.addCartBtns}>
                <button
                  className={styles.removeBtn}
                  onClick={() => setAmount("decrease")}
                  disabled={productAmount === 1}
                >
                  -
                </button>
                <p className={styles.result}>{productAmount}</p>
                <button
                  className={styles.addBtn}
                  onClick={() => setAmount("increase")}
                  disabled={productAmount === 4}
                >
                  +
                </button>
              </div>
              <button className="btn-primary" onClick={addToBag}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className={styles["features__wrapper"]}>
          <div className={styles.features}>
            <h3 className={styles["features__title"]}>Features</h3>
            <p className={styles["features__text"]}>{features}</p>
          </div>
          <div className={styles["item__box"]}>
            <h3 className={styles["item__title"]}>In the box</h3>
            {includes.map((include, index) => {
              return (
                <span key={index} className={styles["includes"]}>
                  <span className={styles["includes__quantity"]}>
                    {include.quantity}x
                  </span>
                  <span className={styles["includes__item"]}>
                    {include.item}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles["images__wrapper"]}>
          <div className={styles["images__left"]}>
            <img
              style={{ width: "450px" }}
              src={`.${first.desktop}`}
              alt="image"
            />
            <img
              style={{ width: "450px" }}
              src={`.${second.desktop}`}
              alt="image"
            />
          </div>
          <div className={styles["images__right"]}>
            <img src={`.${third.desktop}`} alt="image" />
          </div>
        </div>
        <div className={styles["also__wrapper"]}>
          <h3 className={styles["also__title"]}>You may also like </h3>
          <ul className={styles["also__list"]}>
            {others.map((item, index) => {
              return (
                <li className={styles["also__list-item"]} key={index}>
                  <img
                    className={styles["also__list-img"]}
                    src={`.${item.image.desktop}`}
                    alt={item.name}
                  />
                  <h5 className={styles["also__list-title"]}>{item.name}</h5>
                  <Link className="btn-primary" to={`/product/${item.slug}`}>
                    see product
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
