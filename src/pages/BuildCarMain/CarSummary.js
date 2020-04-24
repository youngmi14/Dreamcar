import React, { Component } from "react";

class CarSummary extends Component {
  render() {
    return (
      <div className="carSummaryWrapper">
        <div className="title">
          <h2>Ghibli</h2>
        </div>

        <div className="carSummaryImgCont">
          <img src="https://ph.cloud.maserati.com/8578400/1280/c720/gfx6?config=background;shadow;CRPT/CRPT/94084333;BOE/Q4YG;INT/INT/94084365;BOE/Q4CS;BOE/Q136/INT/94084365;DUMMYOPTS/DOARM/94084328;DUMMYOPTS/DOPUH/94084282;TRIM/Q4MN;RUF/ROO1/94084329;DSH/DSHG/94084330;STEERINGWHEEL/STL1/94084213;BOE/Q5ZK;BOE/Q52J;BOE/Q407;BOE/Q275;FUS/Q410;MEC/Q110;MEC/Q5EM;CAL/Q4SU;RIMS/Q420;EXT/EXT/94084201;glasses_front;MEC/Q400" />
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

<<<<<<< HEAD
        <div className="iconsGroup">
          <button>
            <span>
              <span>저장하기</span>
            </span>
          </button>
          <button>
            <span>
              <span>저장하기</span>
            </span>
          </button>
          <button>
            <span>
              <span>저장하기</span>
            </span>
          </button>
          <button>
            <span>
              <span>저장하기</span>
            </span>
          </button>
          <button>
            <span>
              <span>저장하기</span>
            </span>
          </button>
          <button>
            <span>
              <span>저장하기</span>
            </span>
          </button>
          <button>
            <span>
              <span>저장하기</span>
            </span>
          </button>
          <button>
            <span>
              <span>저장하기</span>
            </span>
          </button>
        </div>
=======
        <ul className="iconGroup">
          <li>
            <a href="#">
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
>>>>>>> 4d9f5d66aa2c4514b05890578f3060e405eca324
      </div>
    );
  }
}

export default CarSummary;
