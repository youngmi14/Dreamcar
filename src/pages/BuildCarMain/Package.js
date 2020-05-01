import React, { Component } from "react";

let lastScrollY = 0;
let ticking = false;

class Package extends Component {
  state = {
    packageDt: [],
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/data/package1.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          packageDt: res.data.description,
        });
      });
  };

  createMarkup = () => {
    return { __html: `${this.state.packageDt}` };
  };

  render() {
    const { packageDt } = this.state;

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
                {packageDt.name}
              </button>
              <button className="addBtn">추가</button>
            </div>
            <div dangerouslySetInnerHTML={this.createMarkup()} />
            {packageDt}

            {/* <div className="content">
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Package;
