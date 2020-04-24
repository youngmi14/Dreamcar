import React, { Component } from "react";

class Loded extends Component {
  render() {
    return (
      <div className="title">
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
