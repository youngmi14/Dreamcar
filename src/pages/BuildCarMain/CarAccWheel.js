import React, { Component } from "react";
import CarAccBtnCount from "./CarAccBtnCount";

export class CarAccWheel extends Component {
  render() {
    return (
      <div className="wheel">
        <CarAccBtnCount
          name="밸브캡 키트"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TW/a006/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="안전 스터드 볼트 키트"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TW/a222/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="휠 중앙 캡-무광 BLCK"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TW/a975/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="휠 중앙 캡-유광 BLCK"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TW/a976/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="볼트 키트 - BLCK"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TW/aa27/info1400x875.jpg"
        />
      </div>
    );
  }
}

export default CarAccWheel;
