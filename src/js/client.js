import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';

import Form from "./components/Form";
import Result from "./components/Result";
import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(
        <Router history={hashHistory}>
            <Route Path="/" component={Layout}>
            </Route>
        </Router>
, app);
