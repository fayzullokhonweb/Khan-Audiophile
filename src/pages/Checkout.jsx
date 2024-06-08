// react-router-dom
import { Link } from "react-router-dom";

// css
import styles from "../css/checkout.module.css";
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";
import { useSelector } from "react-redux";

function Checkout() {
  const { amount, products } = useSelector((state) => state.products);
  console.log(amount);
  console.log(products);
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <Link to="/" className="goBack">
            Go back
          </Link>
          <div className={styles.wrapper}>
            <div className={styles.checkout}>
              <h3 className={styles["checkout__title"]}>checkout</h3>
              <div>
                {" "}
                <div className={styles.details}>
                  <p className={styles["details__title"]}>billing details</p>
                  <div className={styles["details__inputs"]}>
                    <FormInput
                      label="Name"
                      placeholder="Alexei Ward"
                      type="text"
                    />
                    <FormInput
                      label="Email Address"
                      placeholder="alexei@mail.com"
                      type="email"
                    />
                  </div>
                </div>
                <FormInput
                  className={styles.number}
                  label="Phone Number"
                  type="number"
                  placeholder="+1 202-555-0136"
                />
              </div>
              <div className={styles.shipping}>
                <p className={styles["details__title"]}>shipping info</p>
                <FormInput
                  placeholder="1137 Williams Avenue"
                  type="text"
                  label="Addres"
                />
                <div
                  style={{ marginTop: "24px" }}
                  className={styles["details__inputs"]}
                >
                  <FormInput
                    type="number"
                    placeholder="1001"
                    label="ZIP Code "
                  />
                  <FormInput type="text" placeholder="New York" label="City" />
                </div>
                <FormInput
                  label="Country"
                  placeholder="United States"
                  type="text"
                />
              </div>
              <div>
                <div className={styles.payment}>
                  <p className={styles["details__title"]}>Payment Details</p>
                  <div className={styles["payment__method"]}>
                    <p>payment method</p>
                    <div className={styles["payment__method-item"]}>
                      <FormInput placeholder="e-Money" type="text" />
                      <FormInput placeholder="Cash on Delivery" type="text" />
                    </div>
                  </div>
                </div>
                <div className={styles["details__inputs"]}>
                  <FormInput
                    label="e-Money Number "
                    type="number"
                    placeholder="238521993"
                  />
                  <FormInput
                    label="e-Money Pin "
                    type="number"
                    placeholder="6891"
                  />
                </div>
              </div>
            </div>
            <div className={styles.summary}>
              <h6 className={styles["summary__title"]}>SUMMARY</h6>
              {amount === 0 ? (
                <p className={styles.empty}>Your cart is empty.</p>
              ) : (
                products.map((product, index) => (
                  <li key={index} className={styles.product}>
                    <img
                      src={product.image}
                      alt={product.slug}
                      className={styles.productImg}
                    />
                    <div className={styles.productDetails}>
                      <div className={styles.productContent}>
                        <p>{product.slug}</p>
                        <p>{product.price}</p>
                      </div>
                      <p>x{product.amount}</p>
                    </div>
                  </li>
                ))
              )}
              <div className={styles["total__wrapper"]}>
                <h6>Total</h6>
                <h6>
                  $
                  {products
                    .reduce(
                      (total, product) =>
                        total +
                        product.amount *
                          parseFloat(product.price.replace("$", "")),
                      0
                    )
                    .toFixed(2)}
                </h6>
              </div>
              <Link
                style={{ width: "100%", textAlign: "center" }}
                className="btn-primary"
              >
                CONTINUE & PAY
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer none="none" margin="0" />
    </>
  );
}

export default Checkout;
