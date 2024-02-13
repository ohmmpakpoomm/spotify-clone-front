import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NoAuthLayout from "../layouts/NoAuthLayout";
import RegisterPage from "../pages/RegisterPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import RedirectRoute from "../features/auth/components/RedirectRoute";
import ProtectRoute from "../features/auth/components/ProtectRoute";
import HomePage from "../pages/HomePage";
import { Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <RedirectRoute>
        <NoAuthLayout />
      </RedirectRoute>
    ),
    children: [
      {
        path: "/auth/login",
        element: <LoginPage />,
      },
      {
        path: "/auth/register",
        element: <RegisterPage />,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <Outlet />
      </ProtectRoute>
    ),
    children: [{ path: "", element: <HomePage /> }],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
