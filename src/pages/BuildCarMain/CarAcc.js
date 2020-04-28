import React, { Component } from "react";
import "./CarAcc.scss";
import "./BuildCarMain.scss";
// import CarAccBtnCount from "./CarAccBtnCount";
import CarAccAllDefaultList from "./CarAccAllDefaultList";
// import CarAccAllActiveList from "./CarAccAllActiveList";
import CarAccProtect from "./CarAccProtect";
import CarAccSafety from "./CarAccSafety";
import CarAccFunction from "./CarAccFunction";
import CarAccSoultion from "./CarAccSoultion";
import CarAccWheel from "./CarAccWheel";

class CarAcc extends Component {
  constructor() {
    super();
    this.state = {
      btnColor: 0,
    };
  }

  btnTabcolorChange = (idx) => {
    this.setState(
      {
        btnColor: idx,
      },
      () => {
        console.log("colorChange    :", this.state.btnColor);
      }
    );
  };

  tabChange = (idx) => {
    this.setState({
      tabSection: idx,
    });
  };

  render() {
    const accBtn = [
      "전체",
      "관리 및 보호",
      "안전",
      "기술 및 기능",
      "이동 및 적재 솔루션",
      "타이어 및 휠",
    ];

    return (
      <div className="CarAcc">
        <h2 className="title">액세서리</h2>
        <div className="carOutlookTapCont">
          <ul className="toolBar">
            {accBtn.map((name, idx) => {
              return (
                <li
                  onClick={() => this.btnTabcolorChange(idx)}
                  className={this.state.btnColor === idx ? "Clicked" : ""}
                >
                  {name}
                </li>
              );
            })}
            <li>
              <span>
                <img
                  src={require("../../images/CarAccTapMore.PNG")}
                  alt="tapMore"
                />{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className="selectionsCont">
          <ul className="scrollSection">
            {this.state.btnColor === 0 && <CarAccAllDefaultList />}
            {this.state.btnColor === 1 && <CarAccProtect />}
            {this.state.btnColor === 2 && <CarAccSafety />}
            {this.state.btnColor === 3 && <CarAccFunction />}
            {this.state.btnColor === 4 && <CarAccSoultion />}
            {this.state.btnColor === 5 && <CarAccWheel />}
            {/* <div
              className={this.state.active === true ? "" : "CarAccListDisable"}
            >
              <CarAccAllActiveList />
            </div> */}
          </ul>
          {/* <div class="accMore">
            <span>
              액세서리 더 보기
              <span
                className={
                  this.state.active === true ? "moreBtnHide" : "moreBtn"
                }
                onClick={this.moreView}
              ></span>
            </span>
          </div> */}
        </div>
        <div className="priceCheck">
          <p>
            <span className="accMoreHide">최종가격 확인하기:</span>
          </p>
          <div className="button">완료하고 요약 보기</div>
        </div>
      </div>
    );
  }
}

export default CarAcc;
