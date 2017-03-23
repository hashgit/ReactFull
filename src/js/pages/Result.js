import React from "react";

import ConversionStore from "../stores/ConversionStore";

export default class Result extends React.Component {
  constructor() {
    super();
    this.state = { ResultAvailable: false };
  }

  render() {
    console.log(this.state);
    console.log(this.props.location);
    if (this.state.ResultAvailable) {
      if (this.state.Failed) {
        return (
          <div class="container">
            <div class="row">
              Conversion failed
            </div>
          </div>
        );
      } else {
        return (
          <div class="container">
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
      </div>);
    }
  }
}
