import { Fragment } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Logo from '../../logo.png';

const Navbar = (props) => {
  const notLoggedInL = (
    <Fragment>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Fragment>
  );
  const loggedInL = (
    <Fragment>
    
    <span className="username">{props.user}</span>
    <Link to="/logout" onClick={props.onLogOut}>
      Log out
    </Link>
    </Fragment>
  );

  return <nav>
    <img className="logo" src={Logo} alt="missing"/>
      {(!props.loggedIn && notLoggedInL) || loggedInL}
  </nav>;
};

export default Navbar;
