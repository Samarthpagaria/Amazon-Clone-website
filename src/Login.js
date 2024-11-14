import React, { useState, useEffect } from "react";
import "./Login.css";
import AmazonLogo from "./assets/blacklogo.png";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead
import { auth, createUserWithEmailAndPassword } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>>", authUser);
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    // Your sign-in logic here
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    // Use the imported createUserWithEmailAndPassword method
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully created a new user
        if (userCredential) {
          navigate("/"); // Use navigate instead of history.push
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={AmazonLogo} alt="" />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login_signin_button"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon App & Services Conditions of Use
          & Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice. If you do not have an account, please
          create one using the button below.
        </p>

        <button onClick={register} className="login_register_button">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
