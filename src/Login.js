import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((results) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: results.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="Login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
          alt=""
        />

        <div className="login_text">
          <h1>Sign in to Messenger WebApp</h1>
        </div>

        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </div>
  );
}

export default Login;
