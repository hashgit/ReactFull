import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Form from "./pages/Form";
import Result from "./pages/Result";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Form}></IndexRoute>
      <Route path="result" name="result" component={Result}></Route>
    </Route>
  </Router>,
app);
