import React from "react";
import { Link } from "react-router";

import ConversionStore from "../stores/ConversionStore";

export default class Result extends React.Component {
  constructor() {
    super();
    this.state = { ResultAvailable: false };
  }

  componentWillMount()
  {
    console.log(this.props.location);
    this.setState(this.props.location.state);
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
              Conversion failed
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
