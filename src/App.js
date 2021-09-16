import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UserList from "./components/user-list.component";

function App() {
  return(
    <React.Fragment>
      <div className="container">
      <header >MERN CRUD</header>
      <Router>
        <nav className="link-container">
          <Link className="link-style" to={"/user-list"}>User List </Link>
          <Link className="link-style" to={"/create-user"}>Create User </Link>
          <Link className="link-style" to={"/edit-user/:id"}>Edit User </Link>
        </nav>
        <Switch>
          <div>
            <Route exact path='/' component={UserList} />
            <Route path="/create-user" component={CreateUser} />
            <Route path="/edit-user/:id" component={EditUser} />
            <Route path="/user-list" component={UserList} />
          </div>
        </Switch>
      </Router>
      </div>
    </React.Fragment>
  )
}

export default App;