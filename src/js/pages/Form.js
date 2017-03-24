import React from "react";

import Input from "./Input";
import ConversionStore from "../stores/ConversionStore";
import * as ConversionActions from "../actions/ConversionActions";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { Name: "", Amount: "" };
  }

  componentWillMount() {
    ConversionStore.on("success", this.hasResult.bind(this));
    ConversionStore.on("failed", this.failed.bind(this));
  }

  componentWillUnmount() {
    ConversionStore.removeListener("success", this.hasResult.bind(this));
    ConversionStore.removeListener("failed", this.failed.bind(this));
  }

  hasResult(data) {
    console.log("Result");
    console.log(data);
    this.context.router.push(
      {
        pathname: "/result",
        state: { ResultAvailable: true, Failed: false, ResultName: data.Name, ResultAmount: data.Text }
      });
    // this.setState({ ResultAvailable: true, Failed: false, ResultName: data.Name, ResultAmount: data.Text });
  }

  failed() {
    console.log("Failed");
    this.setState({ ResultAvailable: true, Failed: true });
  }

  performAction() {
    ConversionActions.performConversion(this.state)
  }

  changeName(name) {
    console.log(name);
    this.state = { Name: name, Amount: this.state.Amount };
  }

  changeAmount(amount) {
    console.log(amount);
    this.state = { Name: this.state.Name, Amount: amount };
  }

  render() {
    return (
      <div class="container">
        <div class="h3">
          Enter Amount And Your Name
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-horizontal">
                    <Input label="Name" changeValue={this.changeName.bind(this)} />
                    <Input label="Amount" changeValue={this.changeAmount.bind(this)} />
                    <div class="form-group">
                        <input type="button" value="Convert" class="btn btn-default" onClick={this.performAction.bind(this)} />
                    </div>
                </div>
            </div>
            <div class="col-md-6"></div>
        </div>
      </div>
    );
  }
}

Form.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Form;