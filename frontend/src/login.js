import { signIn } from "./firebase";
import { useNavigate } from "react-router-dom";
import loginImg from "./images/logo.png";
import Spinner from "./spinner";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className="logincontainer">
      <img className="loginlogo" src={loginImg} width={200} height={200} />
      <button
        className="btn signinbtn flex"
        onClick={() => {
          setLoading(true);
          signIn(() => navigate("/search", { replace: true }));
        }}>
        Sign in to Search
        {loading && <Spinner />}
      </button>
    </div>
  );
}
