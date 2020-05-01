import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Ghibli from "../../images/Ghibli.jpeg";
import Levante from "../../images/Levante.jpeg";
import Quattroporte from "../../images/Quattroporte.jpeg";

class ModelCont extends Component {
  goToBuildCarMain = () => {
    this.props.history.push("/makemycar");
  };
  render() {
    return (
      <>
        <div className="ModelCont">
          <h2>Ghibli</h2>
          <div className="Medium">
            <p>YOU'RE NOT LIKE EVERYONE ELSE</p>
          </div>

          <div className="Bottom">
            <p>스타일, 파워, 스포티한 핸들링, 컴포트의 완벽한 조화</p>
          </div>
          <a className="ImgCt">
            <img src={Ghibli} />
          </a>
          <div className="BtnWrapper">
            <div className="CtWhite">
              <a href="#">자세히 보기</a>
            </div>
            <div className="CtBlue">
              <a href="#" onClick={this.goToBuildCarMain}>
                내 차량 만들기
              </a>
            </div>
          </div>
        </div>
        <div className="ModelCont">
          <h2>Levante</h2>
          <div className="Medium">
            <p>THE MASERATI OF SUVs</p>
          </div>
          <div className="Bottom">
            <p>강력한 온로드-오프로드 성능</p>
          </div>
          <a className="ImgCt">
            <img src={Levante} />
          </a>

          <div className="BtnWrapper">
            <div className="CtWhite">
              <a href="#">자세히 보기</a>
            </div>
            <div className="CtBlue">
              <a href="#">내 차량 만들기</a>
            </div>
          </div>
        </div>
        <div className="ModelCont">
          <h2>Quattroporte</h2>
          <div className="Medium">
            <p>AN ICON OF ITALIAN ELEGANCE</p>
          </div>
          <div className="Bottom">
            <p>세련된 퍼포먼스와 럭셔리함의 매혹적인 만남</p>
          </div>
          <a className="ImgCt">
            <img src={Quattroporte} />
          </a>
          <div className="BtnWrapper">
            <div className="CtWhite">
              <a href="#">자세히 보기</a>
            </div>
            <div className="CtBlue">
              <a href="#">내 차량 만들기</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ModelCont);
