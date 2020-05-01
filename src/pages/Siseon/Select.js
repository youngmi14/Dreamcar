import React, { Component } from "react";

class Select extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false,
      inputVal: "",
      isLeft: false,
    };
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
      inputVal: e.target.value, //인풋에서는 인풋에 값들어오는거였음
    }); //나는 셀렉이 선택됐는지로 확인하는걸로 해야함
  };

  render() {
    const { pathName, isFocus, isLeft } = this.state;
    const { star, valueV, whatArr } = this.props;

    return (
      <div className="row">
        <div className="require">{star}</div>
        <select className="beautify" type="text" id="5">
          <option value=""></option>
          {{ whatArr }.map((name, idx) => {
            return <option value={idx}>{name}</option>;
          })}
        </select>
        <div className={isFocus ? "textup" : "text"}>{valueV}</div>
      </div>
    );
  }
}

export default Select;
