import React, { Component } from "react";
import "./Inputcom.scss";

class Inputcom extends Component {
  constructor() {
    super();
    this.state = { isFocus: false, inputVal: "", pathName: "", isLeft: false };
  }

  componentDidMount = () => {
    const { locationPath } = this.props;
    if (locationPath === "/buildcar") {
      this.handleInlineStyling(locationPath);
    }
  };

  handleInlineStyling = (locationPath) => {
    this.setState({
      pathName: locationPath,
    });
  };

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
    //console.log("window.location.href", window.location.href);
    //console.log("this.props", this.props);
    const { pathName, isFocus, isLeft } = this.state;
    const { star, valueV } = this.props;

    return (
      <div
        className="row"
        style={{
          width: this.props.locationPath === "/buildcar" ? "100%" : "50%",
        }}
      >
        <div className="require">{star}</div>
        <input
          className={isLeft ? "beautifyRed" : "beautify"}
          onFocus={this.focus}
          onBlur={this.focusOut}
          onChange={this.props.onChange}
          type="text"
        ></input>
        <div className={isFocus ? "textup" : "text"}>{valueV}</div>
      </div>
    );
  }
}

export default Inputcom;
