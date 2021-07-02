import { Link, useHistory } from "react-router-dom";
import { useRef } from "react";
import serverApi from '../../API/serverAPI';

const Register = (props) => {
  const name = useRef(null);
  const pass = useRef(null);
  const history = useHistory();
  const addUserHandler = async (event) => {
    event.preventDefault();
    const user = { 
        username: name.current.value,
        password: pass.current.value,
    }
    const response = await serverApi.addUser(user);
    if (response.status === 200) {
      const newUser = user.username.toString();
      props.onLogin(newUser);
      history.goBack();
    }
    name.current.value = '';
    pass.current.value = '';
  };
  return (
    <div>
      Hello from register!
      <Link to="/">Go back!</Link>
      <form>
        <input type="text" placeholder="Username" ref={name}/>
        <input type="password" placeholder="Password" ref={pass}/>
        <button onClick={addUserHandler}>Register</button>
      </form>
    </div>
  );
};

export default Register;
