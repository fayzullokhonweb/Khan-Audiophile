import { Link } from "react-router-dom";
import styles from "../css/modal.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  clearCart,
  updateProductAmount,
} from "../features/productsSlice";

function Modal({ isOpen, onClose }) {
  const { amount, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleRemoveProduct = (slug) => {
    dispatch(removeProduct(slug));
  };

  const handleUpdateProductAmount = (slug, newAmount) => {
    dispatch(updateProductAmount({ slug, amount: newAmount }));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    onClose();
  };

  return (
    <div className={styles["modal-overlay"]} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <ul className={styles.closeWrapper}>
          <h6>Cart ({amount})</h6>
          <button
            className={styles["removeBtn"]}
            onClick={() => dispatch(clearCart())}
          >
            Remove all
          </button>
        </ul>
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
                <div className={styles.amountControls}>
                  <button
                    onClick={() =>
                      handleUpdateProductAmount(
                        product.slug,
                        product.amount - 1
                      )
                    }
                    disabled={product.amount === 1}
                  >
                    -
                  </button>
                  <span>{product.amount}</span>
                  <button
                    onClick={() =>
                      handleUpdateProductAmount(
                        product.slug,
                        product.amount + 1
                      )
                    }
                    disabled={product.amount === 9}
                  >
                    +
                  </button>
                </div>
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
                  product.amount * parseFloat(product.price.replace("$", "")),
                0
              )
              .toFixed(2)}
          </h6>
        </div>
        <Link to="/checkout" style={{ width: "100%" }} className="btn-primary">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Modal;
