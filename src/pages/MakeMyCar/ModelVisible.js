import React, { Component } from "react";
import "./MakeMyCar.scss";
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
          <h2>{this.props.name}</h2>
          <div className="rowMy">
            <div className="yearButton" role="button">
              2020
            </div>
          </div>
          <div className="image">
            <img
              className="makecar1"
              sizes="100vw"
              src={this.props.carpic}
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
                <div className="specVal">{this.props.version}</div>
              </div>
              <div className="spec">
                <div className="specKey">배기량</div>
                <div className="specVal">{this.props.displacement}</div>
              </div>
            </div>
            <div className="miniSpecRow">
              <div className="spec">
                <div className="specKey">가속</div>
                <div className="specVal">{this.props.acceleration} sec</div>
              </div>
              <div className="spec">
                <div className="specKey">최대 속도</div>
                <div className="specVal">{this.props.maxSpeed} km/h</div>
              </div>
            </div>
            <div className="miniSpecRow">
              <div className="spec">
                <div className="specKey">최대 출력</div>
                <div className="specVal">{this.props.maxPower} HP</div>
              </div>
              <div className="spec">
                <div className="specKey">구동 방식</div>
                <div className="specVal">{this.props.driveType}</div>
              </div>
            </div>
          </div>
          <div className="standardB" style={this.props.dis}>
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
