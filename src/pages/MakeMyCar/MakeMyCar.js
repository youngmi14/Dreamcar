import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Models from "./Models";
import Submodels from "./Submodels";
import Apply from "../Apply/Apply";
import Footer from "../Footer/Footer";
import help from "../../images/help.svg";
import "./MakeMyCar.scss";

class MakeMyCar extends Component {
  render() {
    return (
      <div className="MakeMyCar">
        <Nav />

        <div className="conponentTitle">
          <div className="text">
            <h2 className="title">내 차량 만들기</h2>
            <div className="explanation">
              마세라티는 사람의 손끝에서만 탄생할 수 있는 예술 작품과도
              같습니다.
            </div>
          </div>
        </div>

        <div className="data">
          <Models />
          <Submodels />
        </div>

        <div className="conficodewrapper">
          <div className="conficode">
            <form className="conficodeform" method="get">
              <div className="flexWrapper">
                <div className="text">
                  Configuration Code를 입력하여
                  <br />
                  이전에 진행한 차량 정보를 불러오세요.
                </div>
                <div className="conficodeInput">
                  <div className="inputsInput">
                    <img src={help} className="helpimg" alt="helphelp" />
                    <input
                      className="confiBea"
                      type="text"
                      placeholder="Configuration Code 입력"
                    ></input>
                  </div>
                  <div className="inputsSubmit">
                    <input
                      type="submit"
                      class="ctaSubmit"
                      value="불러오기"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Apply />
        <Footer />
      </div>
    );
  }
}

export default MakeMyCar;
