import { ReactNode } from "react";
import { useAppSelector } from "../../redux/feature/hooks";
import { useCurrentToken } from "../../redux/feature/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  // const {token} = useAppSelector(state=>state.auth);
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
