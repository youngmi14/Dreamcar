import React, { Component } from "react";
import CarAccBtnCount from "./CarAccBtnCount";
import CarAccAllActiveList from "./CarAccAllActiveList";
import "./CarAcc.scss";
// import "./BuildCarMain.scss";

class CarAccAllDefaultList extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      carAcc: [],
    };
  }

  moreView = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  // componentDidMount = () => {
  //   fetch("http://localhost:3000/data/caracc.json")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState(
  //         {
  //           carAcc: res.accessory[1]["안전"],
  //         },
  //         () => console.log("안전", res.accessory[1]["안전"])
  //       );
  //     });
  // };

  render() {
    // const { carAcc } = this.state;
    // const mappedComp = carAcc.map((item) => {
    //   return <CarAccBtnCount name={item.name} imgSrc={item.thumbnail_url} />;
    // });
    return (
      <div className="CarAccAllDefaultList">
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
        <div className={this.state.active === true ? "" : "CarAccListDisable"}>
          <CarAccAllActiveList />
        </div>
        <div class="accMore">
          <span>
            액세서리 더 보기
            <span
              className={this.state.active === true ? "moreBtnHide" : "moreBtn"}
              onClick={this.moreView}
            ></span>
          </span>
        </div>
      </div>
    );
  }
}
export default CarAccAllDefaultList;

/*

<div className="protect">
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
            name="후면 우측 측면 필름"
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
            name="브랜드 바닥 매트 LHD"
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
            name="선셰이드"
            imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a903/info1400x875.jpg"
          />
        </div>
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
        <div className="function">
          <CarAccBtnCount
            name="우산"
            imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TF/a485/info1400x875.jpg"
          />
          <CarAccBtnCount
            name="COURTESY LIGHT KIT WITH LOGO"
            imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TF/aa38/info1400x875.jpg"
          />
        </div>
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
            name="양면 러기지 컴파트먼트 매트"
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
            name="안전 스터드 볼트 키트 - BLCK"
            imgSrc="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_TW/aa27/info1400x875.jpg"
          />
        </div>

*/
