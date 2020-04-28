import React, { Component } from "react";
import CarAccBtnCount from "./CarAccBtnCount";

class CarAccSoultion extends Component {
  render() {
    return (
      <div className="soultion">
        <CarAccBtnCount
          name="트렁크 라이너"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TL/a136/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="트렁크 고정 네트"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TL/a221/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="스키 및 스노우보드 백"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TL/a225/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="러기지 컴파트먼트 매트"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TL/a513/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="트렁크 접이식 상자"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TL/a602/info1400x875.jpg"
        />
        <CarAccBtnCount
          name="적재 모서리 보호매드"
          imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TL/a890/info1400x875.jpg"
        />
      </div>
    );
  }
}

export default CarAccSoultion;
