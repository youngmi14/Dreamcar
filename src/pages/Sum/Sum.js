import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Apply from "../Apply/Apply";
import Footer from "../Footer/Footer";
import "./Sum.scss";
import "../BuildCarMain/BuildCarMain.scss";

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hrefLink: "#",
      tabId: 6,
      navStylerStyle: "",
    };
    this.buildcarMainCont = React.createRef();
    this.href = React.createRef();
  }
  render() {
    const tabNameList = [
      "Lines",
      "외관",
      "실내",
      "패키지",
      "옵션",
      "액세서리",
      "요약",
    ];
    const selecImg = [
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;MEC/Q5EM;glasses_front;MEC/Q400",
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx7?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400;plates",
      "https://ph.cloud.maserati.com/8578300/1280/c720/gfx10?config=background;shadow;glasses_front;MEC/Q400;CRPT/CRPT/94084217;RUF/ROO1/94084297;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;MEC/Q5EM;CAL/KMBC;RIMS/Q420;EXT/EXT/94084201",
    ];
    return (
      <div className="Sum">
        <Nav />
        <section>
          <div className="BuildCarMain">
            <div className="BuildCarContent">
              <nav className="topNav">
                <ul className="tabList">
                  {tabNameList.map((item, idx) => {
                    return (
                      <li name={item}>
                        <a
                          href={this.state.hrefLink}
                          className={this.state.tabId === idx ? "clicked" : ""}
                        >
                          {item}
                        </a>
                        <div
                          className={
                            this.state.tabId === idx ? "divActivatedLeft" : ""
                          }
                        ></div>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>

          <div className="summay">
            <div className="summayHero">
              <div className="heroLeft">
                <img className="img" src={selecImg[0]} />
              </div>
              <div className="heroRight">
                <div className="rightHigh">
                  <img className="img" src={selecImg[1]} />
                </div>
                <div className="rightBottom">
                  <img className="img" src={selecImg[2]} />
                </div>
              </div>
            </div>
            <div className="summayBottom">
              <div className="bottomLeft">
                <h1 className="title">Ghibli</h1>
                <table>
                  <thead>
                    <tr className="trclass">
                      <th className="titleth">외관</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
              <div className="bottomRight">
                <div className="carSummaryWrapper">
                  <div className="title">
                    <h2>Ghibli</h2>
                  </div>
                  <div className="carSummaryImgCont">
                    <img src="https://ph.cloud.maserati.com/8578400/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084333;BOE/Q4YG;INT/INT/94084365;BOE/Q4CS;BOE/Q136/INT/94084365;DUMMYOPTS/DOARM/94084328;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084329;DSH/DSHG/94084330;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q52J;BOE/Q407;BOE/Q275;FUS/Q410;MEC/Q110;MEC/Q5EM;CAL/Q4SU;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400" />
                  </div>
                  <ul className="btnCont">
                    <li>
                      <button>시승 신청</button>
                    </li>
                    <li>
                      <button>견적 신청</button>
                    </li>
                  </ul>

                  <ul className="iconGroup">
                    <li>
                      <a href="#">
                        <img
                          src={require("../../images/tapNavSave.PNG")}
                          alt="save"
                          style={{ height: "25px", marginRight: "12px" }}
                        />
                        저장하기
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={require("../../images/tapNavImport.PNG")}
                          alt="import"
                          style={{ height: "25px", marginRight: "12px" }}
                        />
                        불러오기
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={require("../../images/tapNavMycar.PNG")}
                          alt="mycar"
                          style={{ height: "25px", marginRight: "12px" }}
                        />
                        내 차량 만들기 다시 시작 하기
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={require("../../images/tapNavChange.PNG")}
                          alt="change"
                          style={{
                            height: "25px",
                            marginRight: "12px",
                          }}
                        />
                        모델 변경
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={require("../../images/pdf.png")}
                          alt="change"
                          style={{ height: "25px", marginRight: "16px" }}
                        />
                        PDF
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={require("../../images/friend.png")}
                          alt="change"
                          style={{ height: "25px", marginRight: "12px" }}
                        />
                        친구에게 보내기
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="CcFooter" style={{ marginTop: 0 }}>
          <div className="footerRow">
            <ul className="left">
              <li>
                <a>
                  <span>주의문</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Apply />
        <Footer />
      </div>
    );
  }
}

export default Sum;
