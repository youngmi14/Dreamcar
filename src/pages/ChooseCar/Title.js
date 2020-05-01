import React, { Component } from "react";
import "./Title.scss";

class Title extends Component {
  render() {
    return (
      <div className="Title">
        <div className="noname">
          <span data-key="LinesHeading">본인의 Ghibli를 선택하십시오.</span>
        </div>
        <div className="ctaCont">
          <div className="headCta">
            <button type="button" className="icon">
              <spna data-key="changeModelLabel">모델 변경</spna>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
