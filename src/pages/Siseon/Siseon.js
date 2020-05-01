import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Inputcom from "./Inputcom";
import Select from "./Select";
import Apply from "../Apply/Apply";
import Footer from "../Footer/Footer";
import "./Siseon.scss";

class Siseon extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false,
      inputVal: "",
      //cityArr: [],
      //diArr: [],
    };
  }

  focus = (n) => {
    this.setState({
      isFocus: !this.state.isFocus,
    });
  };

  render() {
    const genderArr = ["남자", "여자"];
    const clockArr = [
      "0-3개월",
      "4-6개월",
      "7-12개월",
      "12개월 이후",
      "계획없음",
    ];
    return (
      <div className="Siseon">
        <Nav />
        <div className="siseonWrapper">
          <div className="title">시승신청</div>
          <div className="form">
            <form className="formm">
              <div className="half">
                <div className="question">개인 상세 정보</div>

                <Inputcom star="*" valueV="이름" />

                <Inputcom star="*" valueV="성" />

                <Inputcom star="*" valueV="생년월일 (YYYY-MM-DD)" />

                <Inputcom star="*" valueV="휴대폰" />

                {/* <Select star="*" valueV="주소(시)" whatArr={cityArr} /> */}

                <Inputcom star="*" valueV="주소(구, 동)" />

                <Inputcom star="*" valueV="이메일" />

                <Select star="*" valueV="성별" whatArr={genderArr} />

                <div className="question">시승신청</div>

                {/* <Select star="*" valueV="가까운 전시장" whatArr={diArr} /> */}

                <Select
                  star="*"
                  valueV="신차구입 예정시기"
                  whatArr={clockArr}
                />

                <Inputcom star="*" valueV="마세라티 관심 모델" />

                <Inputcom star="" valueV="문의 및 기타 의견" />

                <div className="question">현재 보유 차종</div>

                <Inputcom star="*" valueV="브랜드-모델" />

                <div className="full">
                  <div className="asy">
                    <div className="question">개인정보보호 양식</div>
                    <div className="privacy">
                      <p className="priCommon">
                        본인은 마세라티의{" "}
                        <span className="tos">개인정보 양식</span> 읽고
                        이해하였으며,
                      </p>
                    </div>
                    <div className="rowPri">
                      <div className="requireNot"></div>
                      <div className="priChk">
                        <div className="require">*</div>
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="checkBox"
                        ></input>
                        <label for="checkBox" className="checkbowRight">
                          개인정보 취급방침의 제3항에서 정한 마케팅 목적으로
                          본인의 개인정보를 처리하는 데 동의합니다. 연락 채널{" "}
                          <span className="channelT">여기를 클릭하십시오</span>{" "}
                          에 대한 승인을 부분적으로 선택하려는 경우,
                        </label>
                      </div>

                      <div className="priChk">
                        <div className="require">*</div>
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="checkBox"
                        ></input>
                        <label for="checkBox" className="checkbowRight">
                          개인정보 취급방침의 제3항에서 정한 프로파일링 목적으로
                          본인의 개인정보를 처리하는 데 동의합니다.
                        </label>
                      </div>
                      <input
                        type="submit"
                        value="시승신청"
                        class="siBtn"
                      ></input>
                      <div class="requiretext">* 필수입력사항</div>
                    </div>
                    <div className="rowPripro">
                      <p>
                        신청완료까지 로딩시간이 길어질 수 있으니 잠시만 기다려
                        주시기 바랍니다.
                      </p>
                    </div>
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

export default withRouter(Siseon);
