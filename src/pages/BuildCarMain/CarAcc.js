import React, { Component } from "react";
import "./CarAcc.scss";
import "./BuildCarMain.scss";
import CarAccBtnCount from "./CarAccBtnCount";
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
      tabSection: 0,
      carAcc: [],
    };
  }

  componentDidMount = () => {
    fetch("http://13.59.219.151:8000/car/accessory")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            carAcc: res.accessory[0]["관리 및 보호"],
          },
          () => console.log("acc", res.accessory[0]["관리 및 보호"])
        );
      });
  };

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

    const { carAcc } = this.state;

    const mappedComp = carAcc.map((item) => {
      return <CarAccBtnCount name={item.name} imgSrc={item.thumbnail_url} />;
    });

    const tabMenu = ["protect", "safety", "function", "soultion", "wheel"];
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
            {/* <div
              className={
                this.state.tabMenu === tabMenu ? "CarAccListActive" : ""
              }
            >
              <CarAccBtnCount
                name="충전 유지 장치"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
              />

              <CarAccBtnCount
                name="충전 유지 장치"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="실내 자동차 커버"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a088/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="실외 자동차 커버"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a089/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="후면 우측 필름"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a215/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="후면 좌측 측면 필름"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a216/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="실내 바닥 보호 필름"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a692/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="브랜드 바닥 매트 RHD"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a697/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="브랜드 바닥 매트 RHD"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a698/info1400x875.jpg"
              />
            </div> */}
            {/* <div
              className={
                this.state.active === true
                  ? "CarAccListActive"
                  : "CarAccListDisable"
              }
            > */}
            {/* {mappedComp} */}
            {/* <CarAccBtnCount
                name="충전 유지 장치"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="실내 자동차 커버"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a088/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="실외 자동차 커버"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a089/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="후면 우측 필름"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a215/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="후면 좌측 측면 필름"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a216/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="실내 바닥 보호 필름"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a692/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="브랜드 바닥 매트 RHD"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a697/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="브랜드 바닥 매트 RHD"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a698/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="브랜드 바닥 매트  LHD"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a699/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="브랜드 바닥 매트 LHD"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a700/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="브랜드 바닥 매트 LHD"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a701/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="선 셰이드"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a903/info1400x875.jpg"
              /> */}

            {/* 선셰이드드드드 */}
            {/* <CarAccBtnCount
                name="보조 시동 케이블"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_SA/a081/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="비상표시 삼각대"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_SA/a943/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="우산"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TF/a485/info1400x875.jpg"
              />
              <CarAccBtnCount
                name="LIGHT KIT WITH LOGO"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TF/aa38/info1400x875.jpg"
              />
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
                name="안전 볼트 키트 - BLCK"
                imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TW/aa27/info1400x875.jpg"
              />
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
