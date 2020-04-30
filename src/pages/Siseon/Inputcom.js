import React, { Component } from "react";
import "./Siseon.scss";

class Inputcom extends Component {
  constructor() {
    super();
    this.state = { isFocus: false, inputVal: "", isLeft: false };
  }

  focus = () => {
    this.setState({
      isFocus: true,
      //isFocus: !this.state.isFocus,
    });
  };

  focusOut = (e) => {
    if (this.state.inputVal.length === 0) {
      this.setState({
        isLeft: true,
        isFocus: false,
      });
    } else {
      this.setState({
        isLeft: false,
      });
    }
  };

  inputValue = (e) => {
    this.setState({
      inputVal: e.target.value,
    });
  };

  render() {
    const { isFocus, isLeft } = this.state;
    const { star, valueV } = this.props;
    return (
      <div className="row">
        <div className="require">{star}</div>
        <input
          className={isLeft ? "beautifyRed" : "beautify"}
          onFocus={this.focus}
          onBlur={this.focusOut}
          onChange={this.inputValue}
          type="text"
        ></input>
        <div className={isFocus ? "textup" : "text"}>{valueV}</div>
      </div>
    );
  }
}

export default Inputcom;
