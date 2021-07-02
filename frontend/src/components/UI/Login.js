import { Link, useHistory } from "react-router-dom";
import serverApi from "../../API/serverAPI";
import { useRef } from "react";
import "./Login.css";
import { useState } from 'react'

const Login = (props) => {
  const [errState, setErrState] = useState(false);
  const name = useRef(null);
  const pass = useRef(null);
  const history = useHistory();

  const logInHandler = async (event) => {
    event.preventDefault();
    const username = name.current.value;
    const password = pass.current.value;
    const loginInfo = {
      username,
      password,
    };
    const response = await serverApi.logIn(loginInfo);
    if (response.status === 200) {
      setErrState(false);
      const currentUser = loginInfo.username.toString();
      props.onLogin(currentUser);
      history.goBack();
    } else {
      setErrState(true);
    }
  };

  const errMsg = <span className="err-login">Wrong username / password!</span>

  return (
    <div className="div-login">
      <h3>Login to submit posts!</h3>
      <form className="form-login">
        <input type="text" placeholder="Username" ref={name} />
        <input type="password" placeholder="Password" ref={pass} />
        <div className="login-btns">
          <button className="login-button" onClick={logInHandler}>
            Login
          </button>
          <Link className="go-back" to="/">
            Go back!
          </Link>
        </div>
      </form>
      {errState && errMsg}
    </div>
  );
};

export default Login;
