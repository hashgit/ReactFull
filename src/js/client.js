import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, hashHistory } from "react-router";
import Form from "./components/Form";
import Result from "./components/Result";

const app = document.getElementById('app');
ReactDOM.render(
        <Router history={hashHistory}>
          <Route path="/" component={Form}></Route>
          <Route path="/result" compoment={Result}></Route>
        </Router>
, app);
