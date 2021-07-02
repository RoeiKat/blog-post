import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/UI/Navbar";
import Posts from "./components/Content/Posts";
import Login from "./components/UI/Login";
import Register from "./components/UI/Register";


const App = () => {
  const [loggedIn, setLoggedIn ] = useState(false);
  const [user,setUser] = useState('');
  const logInHandler = (logInInfo) => {
    setUser(logInInfo);
    setLoggedIn(true);
  };
  const logOutHandler = () => {
    setUser('');
    setLoggedIn(false);
  }
  useEffect(() => {

  },[])
  return (
    <div className="App">
      <NavBar loggedIn={loggedIn} onLogOut={logOutHandler} user={user}/>
        <Switch>
          <Route path="/" exact>
            <Posts loggedIn={loggedIn}/>
          </Route>
          <Route path="/login" exact>
            <Login onLogin={logInHandler}/>
          </Route>
          <Route path="/register" exact>
            <Register onLogin={logInHandler}/>
          </Route>
          <Route path='/logout' exact>
             <Redirect to="/" />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
