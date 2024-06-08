import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { GlobalContext } from "../context/globalContext";
import { auth } from "../firebase/firebaseConfig";
import { useContext } from "react";
import toast from "react-hot-toast";

function useSignup() {
  const { dispatch } = useContext(GlobalContext);
  const signUpWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch({ type: "LOG_IN", payload: user });
        toast.success("Welcome to");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error.message);
        // ...
      });
  };

  const registerWithEmailAndPassword = (actionData) => {
    createUserWithEmailAndPassword(auth, actionData.email, actionData.password)
      .then(async () => {
        await updateProfile(auth.currentUser, {
          displayName: actionData.name,
          photoURL: actionData.image,
        });
        dispatch({ type: "LOG_IN", payload: user });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return { signUpWithGoogle, registerWithEmailAndPassword };
}

export { useSignup };
