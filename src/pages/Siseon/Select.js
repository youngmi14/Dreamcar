import React, { Component } from "react";

class Select extends Component {
  constructor() {
    super();
    this.state = { isFocus: false, inputVal: "" };
  }

  focus = (n) => {
    this.setState({
      isFocus: !this.state.isFocus,
    });
  };

  render() {
    return (
      <div className="row">
        <div className="require">*</div>
        <select className="beautify" type="text" id="5">
          <option value=""></option>
          <option value="강원도">강원도</option>
          <option value="경기도">경기도</option>
          <option value="경상남도">경상남도</option>
          <option value="경상북도">경상북도</option>
          <option value="광주광역시">광주광역시</option>
          <option value="대구광역시">대구광역시</option>
          <option value="대전광역시">대전광역시</option>
          <option value="부산광역시">부산광역시</option>
          <option value="서울특별시">서울특별시</option>
          <option value="세종특별시">세종특별시</option>
          <option value="울산광역시">울산광역시</option>
          <option value="인천광역시">인천광역시</option>
          <option value="전라남도">전라남도</option>
          <option value="전라북도">전라북도</option>
          <option value="제주특별자치도">제주특별자치도</option>
          <option value="충청남도">충청남도</option>
          <option value="충청북도">충청북도</option>
        </select>
        <div className={`text${this.state.isFocus ? "up" : ""}`}>주소(시)</div>
      </div>
    );
  }
}

export default Select;
