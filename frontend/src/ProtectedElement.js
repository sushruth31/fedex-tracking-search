import { Navigate } from "react-router-dom";
import { useAuth } from "./firebase";
import NavBar from "./navbar";
import Spacer from "./spacer";
import Spinner from "./spinner";

export default function ProtectedElement({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loadingbackdrop">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <NavBar />
      <Spacer />
      {children}
    </>
  );
}
