import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NoAuthLayout from "../layouts/NoAuthLayout";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NoAuthLayout />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
