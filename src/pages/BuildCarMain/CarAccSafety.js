import React, { Component } from "react";
import CarAccBtnCount from "./CarAccBtnCount";

class CarAccSafety extends Component {
  render() {
    return (
      <div className="safety">
        <CarAccBtnCount
          name="보조 시동 케이블"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_SA/a081/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="비상표시 삼각대"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_SA/a943/info1400x875.jpg"
        />
      </div>
    );
  }
}
export default CarAccSafety;
