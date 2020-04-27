import React, { Component } from "react";
import "./MakeMyCar.scss";
import carpic1 from "../../images/makecar1.jpeg";
import plusimg from "../../images/plus.svg";
import { withRouter } from "react-router-dom";

class ModelVisible extends Component {
  goToChooseCar = () => {
    this.props.history.push("/choosecar");
  };
  render() {
    return (
      <div className="ModelVisible">
        <div className="modelvisible">
          <h2>Ghibli</h2>
          <div className="rowMy">
            <div className="yearButton" role="button">
              2020
            </div>
          </div>
          <div className="image">
            <img
              className="makecar1"
              sizes="100vw"
              src={carpic1}
              alt="makecars"
            />
          </div>
          <div className="pricecar">
            <div className="cta">
              <a onClick={this.goToChooseCar}>내 차량 만들기</a>
            </div>
          </div>
          <div className="miniSpec">
            <div className="miniSpecRow">
              <div className="spec">
                <div className="specKey">엔진 타입</div>
                <div className="specVal">V6</div>
              </div>
              <div className="spec">
                <div className="specKey">배기량</div>
                <div className="specVal">2979 cc</div>
              </div>
            </div>
            <div className="miniSpecRow">
              <div className="spec">
                <div className="specKey">가속</div>
                <div className="specVal">5.5 sec</div>
              </div>
              <div className="spec">
                <div className="specKey">최대 속도</div>
                <div className="specVal">267 km/h</div>
              </div>
            </div>
            <div className="miniSpecRow">
              <div className="spec">
                <div className="specKey">최대 출력</div>
                <div className="specVal">350 HP</div>
              </div>
              <div className="spec">
                <div className="specKey">구동 방식</div>
                <div className="specVal">RWD</div>
              </div>
            </div>
          </div>
          <div className="standardB">
            <a>
              <span>Standard Equipment</span>
              <img src={plusimg} className="plusimg" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ModelVisible);
