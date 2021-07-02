import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const notLoggedInL = (
    <Fragment>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Fragment>
  );
  const loggedInL = (
    <Fragment>
    <h3>{`Hello ${props.user}!`}</h3>
    <Link to="/logout" onClick={props.onLogOut}>
      Log out
    </Link>
    </Fragment>
  );

  return <nav>
      {(!props.loggedIn && notLoggedInL) || loggedInL}
  </nav>;
};

export default Navbar;
