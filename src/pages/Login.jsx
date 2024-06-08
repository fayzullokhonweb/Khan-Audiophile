import { Form, Link } from "react-router-dom";
import { SubmitBtn } from "../components";

function Login() {
  return (
    <div className="h-screen grid place-content-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
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
          <SubmitBtn text="Login" />
        </div>
        <p className="text-center">
          Not a member yet ?
          <Link to="/register" className="capitalize link-primary">
            {" "}
            register
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
