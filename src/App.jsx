import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";

// components
import { ProtectedRoutes } from "./components";

// context
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/globalContext";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

// action
import { action as SignUpAction } from "./pages/Signup";

// pages
import {
  Home,
  Checkout,
  Earphones,
  Headphones,
  Signup,
  SingleProduct,
  Speakers,
  Error,
} from "./pages";

import { loader as HeadphonesLoader } from "./pages/Headphones";
import { loader as SpeakersLoader } from "./pages/Speakers";
import { loader as EarphonesLoader } from "./pages/Earphones";
import { loader as HomeLoader } from "./pages/Home";

function App() {
  const { user, dispatch, authReady } = useContext(GlobalContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_READY" });
      console.log(user);
    });
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
          loader: SpeakersLoader,
        },
        {
          path: "/headphones",
          element: <Headphones />,
          loader: HeadphonesLoader,
        },
        {
          path: "/earphones",
          element: <Earphones />,
          loader: EarphonesLoader,
        },
        {
          path: "/product/:slug",
          element: <SingleProduct />,
        },
      ],
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
      errorElement: <Error />,
      action: SignUpAction,
    },
  ]);

  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
