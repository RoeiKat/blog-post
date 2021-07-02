import { Link, useHistory } from 'react-router-dom';
import serverApi from '../../API/serverAPI';
import { useRef } from 'react';

const Login = (props) => {
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
    }
    const response = await serverApi.logIn(loginInfo);
    if (response.status === 200) {
        const currentUser = loginInfo.username.toString();
        props.onLogin(currentUser);
        history.goBack();
    }
    name.current.value = '';
    pass.current.value = '';
    
    };

    return <div>Hello from login!
        <Link to="/">Go back!</Link>
        <form>
            <input type='text' placeholder='Username' ref={name}/>
            <input type='password' placeholder='Password' ref={pass}/>
            <button onClick={logInHandler}>Login</button>
        </form>
    </div>
}

export default Login;