import React from "react";
import { Link } from "react-router";

import ConversionStore from "../stores/ConversionStore";

export default class Result extends React.Component {
  constructor() {
    super();
    this.state = { ResultAvailable: false };
  }

  render() {
    if (this.state.ResultAvailable) {
      if (this.state.Failed) {
        return (
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <Link to="/">&lt;- Back</Link>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                Conversion failed
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <Link to="/">&lt;- Back</Link>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p>Name: {this.state.ResultName}</p>
                <p>Amount in Text: {this.state.ResultAmount}</p>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (<div>
                    <div class="row">
              <div class="col-md-12">
                <Link to="/">&lt;- Back</Link>
              </div>
            </div>
      </div>);
    }
  }
}
