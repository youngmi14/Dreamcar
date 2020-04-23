import React, { Component } from "react";
import "./CarAcc.scss";

class CarAcc extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  Plus = () => {
    if (this.state.number > 9) {
      return 0;
    }
    this.setState({
      number: this.state.number + 1,
    });
  };

  Minus = () => {
    if (this.state.number < 1) {
      return 0;
    }

    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <div className="CarAcc">
        <h2 className="title">액세서리</h2>
        <div className="carOutlookTapCont">
          <ul className="toolBar">
            <li>
              <span>전체</span>
            </li>
            <li>
              <span>관리 및 보호</span>
            </li>
            <li>
              <span>안전</span>
            </li>
            <li>
              <span>기술 및 기능</span>
            </li>
            <li>
              <span>이동 및 적재 솔루션</span>
            </li>
            <li>
              <span>타이어 및 휠</span>
            </li>
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
            <div class="cardBoxCont">
              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button
                    className="plusBtn"
                    name="plus1"
                    type="button"
                    onClick={this.Plus}
                  >
                    +
                  </button>
                </div>
              </li>
              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>

              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>

              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>
            </div>

            <div class="cardBoxCont">
              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button
                    className="plusBtn"
                    name="plus1"
                    type="button"
                    onClick={this.Plus}
                  >
                    +
                  </button>
                </div>
              </li>
              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>

              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>

              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>
            </div>

            <div class="cardBoxCont">
              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button
                    className="plusBtn"
                    name="plus1"
                    type="button"
                    onClick={this.Plus}
                  >
                    +
                  </button>
                </div>
              </li>
              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>

              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>

              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>
            </div>

            <div class="cardBoxCont">
              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button
                    className="plusBtn"
                    name="plus1"
                    type="button"
                    onClick={this.Plus}
                  >
                    +
                  </button>
                </div>
              </li>
              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>

              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>

              <li className="cardBox">
                <div className="productImg">
                  <img
                    src="https://www.configurator.maserati.com/cc/adm/repo/8578300/ACC_CP/a077/info1400x875.jpg"
                    alt="img"
                  />
                </div>
                <div className="informationBtn">
                  <span>
                    <img
                      src={require("../../images/CarAccInformationBtn.PNG")}
                      alt="information"
                    />
                  </span>
                  <h3>
                    <a href="#">충전 유지 장치</a>
                  </h3>
                </div>
                <div className="countBtn">
                  <button
                    className="minusBtn"
                    type="button"
                    onClick={this.Minus}
                  >
                    -
                  </button>
                  <span className="count">{this.state.number}</span>
                  <button className="plusBtn" type="button" onClick={this.Plus}>
                    +
                  </button>
                </div>
              </li>
            </div>
          </ul>
          <div class="accMore">
            <span>액세서리 더 보기</span>
            <span className="accMoreImg">
              <img src={require("../../images/CarAccMore.PNG")} alt="more" />
            </span>
          </div>
        </div>
        <div className="priceCheck">
          <p>
            <span>최종가격 확인하기:</span>
          </p>
          <div className="button">완료하고 요약 보기</div>
        </div>
      </div>
    );
  }
}

export default CarAcc;
