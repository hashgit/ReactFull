import React from "react";

import ConversionStore from "../stores/ConversionStore";

export default class Result extends React.Component {
  constructor() {
    super();
    this.state = { ResultAvailable: false };
  }

  componentWillMount() {
    ConversionStore.on("success", this.hasResult.bind(this));
    ConversionStore.on("failed", this.failed.bind(this));
  }

  componentWillUnmount() {
    ConversionStore.removeListener("success");
    ConversionStore.removeListener("failed");
  }

  hasResult(data) {
    console.log("Result");
    console.log(data);
    this.setState({ ResultAvailable: true, ResultName: data.Name, ResultAmount: data.Text });
  }

  failed() {
    console.log("Failed");
    this.setState({ ResultAvailable: true, Failed: true });
  }

  render() {
    if (this.state.ResultAvailable) {
      if (this.state.Failed) {
        return (
        <div>
          Conversion failed
        </div>
        );
      } else {
        return (
          <div class="col-md-12">
            <p>Name: {this.state.ResultName}</p>
            <p>Amount in Text: {this.state.ResultAmount}</p>
          </div>
        );
      }
    } else {
      return (<div>
      </div>);
    }
  }
}