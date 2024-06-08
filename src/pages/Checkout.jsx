// react-router-dom
import { Link } from "react-router-dom";

// css
import styles from "../css/checkout.module.css";
import Footer from "../components/Footer";

function Checkout() {
  function FormInput({ label, name, type, placeholder }) {
    return (
      <label
        style={{ display: "flex", flexDirection: "column", width: "310px" }}
      >
        <div>
          <span
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#000",
              fontFamily: "Manrope",
            }}
          >
            {label}
          </span>
        </div>
        <input
          className={styles["details__input"]}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </label>
    );
  }

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
                label="Phone Number"
                type="number"
                placeholder="+1 202-555-0136"
              />
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
