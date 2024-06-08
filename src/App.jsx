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

import { useEffect } from "react";
import { authReady, login } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";

// firebase
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

// action
import { action as RegisterAction } from "./pages/Register";

// pages
import {
  Home,
  Checkout,
  Earphones,
  Headphones,
  SingleProduct,
  Speakers,
  Error,
  Register,
  Login
} from "./pages";

import { loader as HeadphonesLoader } from "./pages/Headphones";
import { loader as SpeakersLoader } from "./pages/Speakers";
import { loader as EarphonesLoader } from "./pages/Earphones";
import { loader as HomeLoader } from "./pages/Home";

function App() {
  const { user } = useSelector((state) => state.user);

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
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
      errorElement: <Error />,
      action: RegisterAction,
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user));
      dispatch(authReady());
    });
  }, []);

  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
