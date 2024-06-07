//react
import { useState } from "react";

// navlinks
import NavLinks from "./NavLinks";

// components
import Modal from "./Modal";

// react router dom
import { Link } from "react-router-dom";

// css
import "../index.css";
import styles from "../css/navbar.module.css";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={` ${styles.navbar__container}  container`}>
        <Link to="/" className={styles.navbar__content}>
          <img src="../assets/audiophile.svg" alt="audiophile" />
        </Link>
        <NavLinks />
        <div onClick={handleIconClick} className={styles.cart__wrapper}>
          <img
            style={{ borderRadius: "0" }}
            src="../assets/shared/desktop/icon-cart.svg"
            alt="cart-icon"
          />
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default Navbar;
