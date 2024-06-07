import { Link, useRouteError } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../components/ErrorAnimation.json";
import { MdOutlineNavigateNext } from "react-icons/md";

function Error() {
  const error = useRouteError();
  console.log(error); // Rivojlanish paytida bu foydali, lekin ishlab chiqarishda olib tashlang.

  if (error && error.status === 404) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Player
          autoplay
          loop
          src={animationData}
          style={{ height: "400px", width: "500px" }}
        />
        <h2 className="error-title">Page Not Found</h2>{" "}
        <h5 className="error-message">Oops... We cannot find this page</h5>{" "}
        <Link className="home-link" to="/">
          Go home
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <h2>Something went wrong</h2>
      <Link
        style={{ backgroundColor: "#fff", marginTop: "40px", fontSize: "24px" }}
        to="/"
      >
        Go home
      </Link>
    </div>
  );
}

export default Error;
