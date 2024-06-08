import React, { useState, useEffect } from "react";
import styles from "../css/signup.module.css";

// react icons
import { FaGooglePlusG } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { Form, useActionData } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

// context

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("displayName");
  let email = formData.get("email");
  let password = formData.get("password");

  return { name, email, image, password };
};

const Signup = () => {
  const { signUpWithGoogle, registerWithEmailAndPassword } = useSignup();

  const actionData = useActionData();

  useEffect(() => {
    if (actionData) {
      registerWithEmailAndPassword(actionData);
    }
  }, [actionData]);

  const [isActive, setIsActive] = useState(false);
  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${isActive ? styles.active : ""}`}
        id="container"
      >
        <div className={`${styles["form-container"]} ${styles["sign-up"]}`}>
          <Form>
            <h2>Create Account</h2>
            <div className={styles["social-icons"]}>
              <button onClick={signUpWithGoogle} className={styles.icon}>
                <FaGooglePlusG style={{ width: "30px", height: "20px" }} />
              </button>
              <button onClick={signUpWithGoogle} className={styles.icon}>
                <RiFacebookFill style={{ width: "20px", height: "20px" }} />
              </button>
              <button onClick={signUpWithGoogle} className={styles.icon}>
                <FaGithub style={{ width: "20px", height: "20px" }} />
              </button>
              <button onClick={signUpWithGoogle} className={styles.icon}>
                <FaLinkedinIn style={{ width: "15px", height: "20px" }} />
              </button>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={registerWithEmailAndPassword} type="submit">
              Sign Up
            </button>
          </Form>
        </div>
        <div className={`${styles["form-container"]} ${styles["sign-in"]}`}>
          <Form>
            <h2>Sign In</h2>
            <div className={styles["social-icons"]}>
              <button onClick={signUpWithGoogle} className={styles.icon}>
                <FaGooglePlusG style={{ width: "30px", height: "20px" }} />
              </button>
              <button href="#" className={styles.icon}>
                <RiFacebookFill style={{ width: "20px", height: "20px" }} />
              </button>
              <button href="#" className={styles.icon}>
                <FaGithub style={{ width: "20px", height: "20px" }} />
              </button>
              <button href="#" className={styles.icon}>
                <FaLinkedinIn style={{ width: "15px", height: "20px" }} />
              </button>
            </div>
            <span>or use your email for login</span>
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />

            <button onClick={registerWithEmailAndPassword} type="submit">
              Sign In
            </button>
          </Form>
        </div>
        <div className={styles["toggle-container"]}>
          <div className={styles.toggle}>
            <div
              className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}
            >
              <h2>Welcome Back!</h2>
              <p>Enter your personal details to use all of site features</p>
              <button
                className={styles.hidden}
                id="login"
                onClick={handleLoginClick}
              >
                Sign In
              </button>
            </div>
            <div
              className={`${styles["toggle-panel"]} ${styles["toggle-right"]}`}
            >
              <h2>Hello, Friend!</h2>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button
                className={styles.hidden}
                id="register"
                onClick={handleRegisterClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
