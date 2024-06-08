// react-router-dom
import { Link } from "react-router-dom";

// css
import styles from "../css/checkout.module.css";
import Footer from "../components/Footer";

import FormInput from "../components/FormInput";

function Checkout() {
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
            <div className={styles.summary}>efbeufbewufbu</div>
          </div>
        </div>
      </section>
      <Footer none="none" margin="0" />
    </>
  );
}

export default Checkout;
