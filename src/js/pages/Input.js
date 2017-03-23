import React from "react";

export default class Input extends React.Component {

  handleChange(e) {
      const val = e.target.value;
      this.props.changeValue(val);
  }

  render() {
    return (
      <div class="form-group">
        <label class="form-label">{this.props.label}</label>
        <input type="text" class="form-control" onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
