import React, { Component } from "react";
import SubSelection from "./SubSelection";
import Package from "./Package";

class CarSection extends Component {
  state = {
    btnColor: "#fff",
    btnClicked: "",
    isClickedName: "",
    btnName: ["외관", "휠", "브레이크 클리퍼"],
  };

  btnTabcolorChange = (itemName) => {
    this.setState({
      btnClicked: "btnClicked",
      isClickedName: itemName,
    });
  };

  render() {
    const { btnClicked, btnName } = this.state;

    return (
      <div className="CarSection">
        <a name="carDisplay1"></a>
        <div className="carDisplayWrapper">
          <div className="carImgCont">
            <img src="https://ph.cloud.maserati.com/8578400/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084333;BOE/Q4YG;INT/INT/94084365;BOE/Q4CS;BOE/Q136/INT/94084365;DUMMYOPTS/DOARM/94084328;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084329;DSH/DSHG/94084330;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q52J;BOE/Q407;BOE/Q275;FUS/Q410;MEC/Q110;MEC/Q5EM;CAL/Q4SU;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400" />
          </div>

          <div className="carOutlookTapCont">
            <ul className="toolBar">
              {btnName.map((itemName) => {
                return (
                  <li
                    role="button"
                    className={
                      this.state.isClickedName === itemName
                        ? this.state.btnClicked
                        : ""
                    }
                    name={itemName}
                    onClick={() => this.btnTabcolorChange(itemName)}
                  >
                    {itemName}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="selectionsCont">
            <div className="scrollSection">
              <SubSelection />
            </div>
          </div>
        </div>
        <a name="carDisplay2"></a>

        <Package />
        <p>
          *참고: 국가에 따라 패키지 구성의 필수 패키지 또는 옵션 등이 상이할 수
          있습니다. 각 패키지의 가격은 다른 패키지나 옵션의 추가 및 삭제에 의해
          변동될 수 있습니다.
        </p>
      </div>
    );
  }
}

export default CarSection;
