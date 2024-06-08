// react-router-dom
import { Link } from "react-router-dom";

// css
import styles from "../css/checkout.module.css";

function Checkout() {
  function FormInput({ label, name, type, placeholder }) {
    return (
      <label>
        <div>
          <span>{label}</span>
        </div>
        <input type={type} placeholder={placeholder} name={name} />
        <div></div>
      </label>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="goBack">
        Go back
      </Link>
      <div>
        <div>
          <p>billing details</p>
          <div>
            <FormInput label="Name" placeholder="Alexei Ward" type="text" />
            <FormInput
              label="Email Address"
              placeholder="alexei@mail.com"
              type="email"
            />
          </div>
          <FormInput
            label="Phone Number"
            type="number"
            placeholder="+1 202-555-0136"
          />
        </div>
        <div className="summary"></div>
      </div>
    </div>
  );
}

export default Checkout;
