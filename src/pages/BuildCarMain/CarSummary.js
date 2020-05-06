import React, { Component } from "react";

class CarSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: 0,
      thumbImg: [
        "https://ph.cloud.maserati.com/8578400/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084333;BOE/Q4YG;INT/INT/94084365;BOE/Q4CS;BOE/Q136/INT/94084365;DUMMYOPTS/DOARM/94084328;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084329;DSH/DSHG/94084330;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q52J;BOE/Q407;BOE/Q275;FUS/Q410;MEC/Q110;MEC/Q5EM;CAL/Q4SU;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084200;MEC/Q5EM;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578400/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084333;BOE/Q4YG;INT/INT/94084365;BOE/Q4CS;BOE/Q136/INT/94084365;DUMMYOPTS/DOARM/94084328;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084329;DSH/DSHG/94084330;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q52J;BOE/Q407;BOE/Q275;FUS/Q410;MEC/Q110;MEC/Q5EM;CAL/Q4SU;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084206;MEC/Q5EM;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084206;MEC/Q5EM;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084202;MEC/Q5EM;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;MEC/Q5EM;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084217;INT/INT/94084213;BOE/Q136/INT/94084213;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084297;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q212;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084209;MEC/Q5EM;glasses_front;MEC/Q400",
        "https://ph.cloud.maserati.com/8578300/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084305;INT/INT/94084350;BOE/Q136/INT/94084350;DUMMYOPTS/DOARM/94084282;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084296;DSH/DSHG/94084269;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q4B2;BOE/Q407;BOE/QAWS;FUS/Q410;CAL/KMBC;RIMS/Q420;EXT/EXT/94084210;MEC/Q5EM;glasses_front;MEC/Q400",
      ],
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.identifier !== nextProps.identifier) {
      prevState.identifier = nextProps.identifier;
    }
    return null;
  }

  render() {
    const { thumbImg, identifier } = this.state;
    return (
      <div className="carSummaryWrapper">
        <div className="title">
          <h2>Ghibli</h2>
        </div>

        <div className="carSummaryImgCont">
          <img src={thumbImg[identifier]} />
        </div>

        <ul className="btnCont">
          <li>
            <button>요약 보기</button>
          </li>
          <li>
            <button>시승 신청</button>
          </li>
          <li>
            <button>견적 신청</button>
          </li>
        </ul>

        <ul className="iconGroup">
          <li>
            <a
              href="#"
              onClick={(e) => {
                this.props.onClickHandler(e);
              }}
            >
              <img src={require("../../images/tapNavSave.PNG")} alt="save" />
              저장하기
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={require("../../images/tapNavImport.PNG")}
                alt="import"
              />
              불러오기
            </a>
          </li>
          <li>
            <a href="#">
              <img src={require("../../images/tapNavMycar.PNG")} alt="mycar" />
              내 차량 만들기 다시 시작 하기
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={require("../../images/tapNavChange.PNG")}
                alt="change"
              />
              모델 변경
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CarSummary;
