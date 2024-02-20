import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

export default function ProtectRoute({ children }) {
  const { authUser, getCode } = useAuth();

  const extractCode = getCode();

  if (!extractCode && !authUser) return <Navigate to="/auth/login" />;
  else if (authUser || extractCode) return children;
}
