import { Link, useHistory } from "react-router-dom";
import { useRef } from "react";
import serverApi from "../../API/serverAPI";
import './Register.css';

const Register = (props) => {
  const name = useRef(null);
  const pass = useRef(null);
  const history = useHistory();
  const addUserHandler = async (event) => {
    event.preventDefault();
    const user = {
      username: name.current.value,
      password: pass.current.value,
    };
    const response = await serverApi.addUser(user);
    if (response.status === 200) {
      const newUser = user.username.toString();
      props.onLogin(newUser);
      history.goBack();
    }
  };
  return (
    <div className="div-register">
      <div className="info">
        <h3>Register Now!</h3>
        <div>Register to add new Posts or Comment on your favorite ones!</div>
      </div>
      <form className="form-register">
        <input type="text" placeholder="Username" ref={name} />
        <input type="password" placeholder="Password" ref={pass} />
        <div className="register-btns">
          <button className="register-button" onClick={addUserHandler}>Register</button>
          <Link className="go-back" to="/">Go back!</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
