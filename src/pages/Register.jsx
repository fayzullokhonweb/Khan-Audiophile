import { Link, Form, useActionData } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useEffect } from "react";
import { SubmitBtn } from "../components";
import styles from "../css/register.module.css";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let email = formData.get("email");
  let password = formData.get("password");

  return { displayName, photoURL, email, password };
};

function Register() {
  const data = useActionData();
  const { register } = useRegister();

  useEffect(() => {
    if (data) {
      register(data);
    }
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <Form
        method="post"
        className={styles.container}
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <div className="form-control">
          <label className="w-full">
            <div className="label">
              <span className="label-text capitalize">User:</span>
            </div>
            <input
              type="text"
              name="user"
              placeholder="Type here"
              defaultValue="User"
              className={`input input-bordered w-full`}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="w-full">
            <div className="label">
              <span className="label-text capitalize">Photo URL:</span>
            </div>
            <input
              type="url"
              name="photoUrl"
              placeholder="Type here"
              defaultValue="https://..."
              className={`input input-bordered w-full`}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="w-full">
            <div className="label">
              <span className="label-text capitalize">Email:</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              defaultValue="test@gmail.com"
              className={`input input-bordered w-full`}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="w-full">
            <div className="label">
              <span className="label-text capitalize">Password:</span>
            </div>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              defaultValue="secret"
              className={`input input-bordered w-full`}
            />
          </label>
        </div>
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Not a member yet ?
          <Link to="/login" className="capitalize link-primary">
            login
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
