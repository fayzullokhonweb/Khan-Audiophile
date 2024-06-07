import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { GlobalContext } from "../context/globalContext";
import { useContext } from "react";

function useLogin() {
  const { dispatch } = useContext(GlobalContext);

  const loginWithEmailAndPassword = (actionData) => {
    signInWithEmailAndPassword(auth, actionData.email, actionData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOG_IN", payload: user });
        toast.success("Welcome to");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        toast.success(errorMessage);
      });
  };

  return { loginWithEmailAndPassword };
}

export { useLogin };
