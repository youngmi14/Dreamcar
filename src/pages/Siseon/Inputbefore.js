import React, { Component } from "react";
import "./Inputcom.scss";

class Inputbfore extends Component {
  constructor() {
    super();
    this.state = { isFocus: false, inputVal: "", isLeft: false, pathName: "" };
  }
  focus = () => {
    this.setState({
      isFocus: true,
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

  render() {
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
          onChange={(e) => {
            this.inputValue(e);
            if (this.props.locationPath === "/buildcar") {
              this.props.onChange(e);
            } else {
              this.props.onSelect(e);
            }
          }}
          type="text"
          name={this.props.name}
        ></input>
        <div className={isFocus ? "textup" : "text"}>{valueV}</div>
      </div>
    );
  }
}

export default Inputbfore;
