import React, { Component } from "react";

class Package extends Component {
  render() {
    return (
      <div className="Package">
        <h2 className="title">패키지</h2>
        <div className="packCard">
          <div className="picCont">
            <img src="https://www.configurator.maserati.com/cc/adm/repo/8578300/PACK/Q90T/info1400x875.jpg" />
          </div>

          <div className="desc">
            <div className="header">
              <button className="titleBtn">
                <div></div>
                운전자 보조 패키지
              </button>
              <button className="addBtn">추가</button>
            </div>

            <div className="content">
              <p className="spanTitle">
                <span>패키지 포함 사항:</span>
              </p>
              <p>
                <ul>
                  <li>
                    <span>Stop & Go 기능이 있는 어댑티브 크루즈 컨트롤</span>
                  </li>
                  <li>
                    <span>Stop & Go 기능이 있는 어댑티브 크루즈 컨트롤</span>
                  </li>
                  <li>
                    <span>Stop & Go 기능이 있는 어댑티브 크루즈 컨트롤</span>
                  </li>
                  <li>
                    <span>Stop & Go 기능이 있는 어댑티브 크루즈 컨트롤</span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Package;
