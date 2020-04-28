import React, { Component } from "react";
import CarAccBtnCount from "./CarAccBtnCount";

class CarAccFunction extends Component {
  render() {
    return (
      <div className="function">
        <CarAccBtnCount
          name="우산"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TF/a485/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="LIGHT KIT WITH LOGO"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TF/aa38/info1400x875.jpg"
        />
      </div>
    );
  }
}
export default CarAccFunction;
