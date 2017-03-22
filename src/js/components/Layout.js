import React from "react";
import { Route, Router } from "react-router";
import Form from "./Form";
import Result from "./Result";

export default class Layout extends React.Component {

  render() {
    return (
      <div class="container">
        <Router>
          <Route path="/" component={Form}></Route>
          <Route path="/result" compoment={Result}></Route>
        </Router>
      </div>
    );
  }
}
