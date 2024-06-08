import styles from "../css/forminput.module.css";

function FormInput({ label, name, type, placeholder }) {
  return (
    <label className={styles.label}>
      <div>
        <span className={styles.span}>{label}</span>
      </div>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
}

export default FormInput;
