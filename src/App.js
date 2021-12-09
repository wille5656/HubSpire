
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useMemo, useState, useEffect } from "react";
import Login from "./components/functionalLogin";
import SignUp from "./components/signup.component";
import api from "./components/Api";
import array from "./components/Array";
import axios from "./components/axios";
import Able from "./components/table";
import Query from "./components/query";
import Reactive from "./components/reactive";
import Graph from "./components/graph";
import Field from "./components/field";
import Child from "./components/child";
import Parent from "./components/parent";

function App() {


      

 




  return (
  
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>HubSpire</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className =" nav-item" >
                {/* <Link classname = "nav-link" to = {"/api"}>API</Link> */}
                </li>
                <li className =" nav-item" >
                <Link classname = "nav-link" to = {"/parent"}>Parent</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            {/* <Route path="/api" component={api} /> */}
            <Route path="/Parent" component={Parent} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
