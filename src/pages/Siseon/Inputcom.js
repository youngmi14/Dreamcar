import React, { Component } from "react";
import "./Siseon.scss";

class Inputcom extends Component {
  constructor() {
    super();
    this.state = { isFocus: false, inputVal: "" };
  }

  focus = (e) => {
    this.setState({
      isFocus: !this.state.isFocus,
    });
  };

  focusRed = (e) => {
    if (this.state.inputVal) {
      //this.state.inputVal
      this.setState({
        isFocus: true,
      });
    } else {
      this.setState({
        isFocus: false,
      });
    }
  };

  inputvalue = (e) => {
    const inputVal = e.target.value;

    this.setState({
      [e.target.name]: inputVal,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="require">{this.props.star}</div>
        <input
          onFocus={(e) => {
            this.focus(e);
          }}
          onBlur={(e) => {
            this.focusRed(e);
          }}
          onChange={this.inputvalue}
          className="beautify"
          name="inputVal"
          type="text"
        ></input>
        <div className={`text${this.state.isFocus ? "up" : ""}`}>
          {this.props.valueV}
        </div>
      </div>
    );
  }
}

export default Inputcom;
