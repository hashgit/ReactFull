import React from "react";

import Input from "./Input";
import ConversionStore from "../stores/ConversionStore";
import * as ConversionActions from "../actions/ConversionActions";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = { Name: "", Amount: "" };
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
