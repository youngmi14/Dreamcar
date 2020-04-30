import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Inputcom from "./Inputcom";
import Apply from "../Apply/Apply";
import Footer from "../Footer/Footer";
import "./Siseon.scss";

class Siseon extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false,
      inputVal: "",
    };
  }

  focus = (n) => {
    this.setState({
      isFocus: !this.state.isFocus,
    });
  };

  render() {
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

                <Inputcom star="*" valueV="생년월일" />

                <Inputcom star="*" valueV="휴대폰" />

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text" id="5">
                    <option value=""></option>
                    <option value="강원도">강원도</option>
                    <option value="경기도">경기도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="경상북도">경상북도</option>
                    <option value="광주광역시">광주광역시</option>
                    <option value="대구광역시">대구광역시</option>
                    <option value="대전광역시">대전광역시</option>
                    <option value="부산광역시">부산광역시</option>
                    <option value="서울특별시">서울특별시</option>
                    <option value="세종특별시">세종특별시</option>
                    <option value="울산광역시">울산광역시</option>
                    <option value="인천광역시">인천광역시</option>
                    <option value="전라남도">전라남도</option>
                    <option value="전라북도">전라북도</option>
                    <option value="제주특별자치도">제주특별자치도</option>
                    <option value="충청남도">충청남도</option>
                    <option value="충청북도">충청북도</option>
                  </select>
                  <div className={`text${this.state.isFocus ? "up" : ""}`}>
                    주소(시)
                  </div>
                </div>

                <Inputcom star="*" valueV="주소(구, 동)" />

                <Inputcom star="*" valueV="이메일" />

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text" id="8">
                    <option value=""></option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                  </select>
                  <div className={`text${this.state.isFocus ? "up" : ""}`}>
                    성별
                  </div>
                </div>

                <div className="question">시승신청</div>

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text" id="9">
                    <option value=""></option>
                    <option value="Seoul (FMK CPO)">Seoul (FMK CPO)</option>
                    <option value="서울 (강남 전시장)">
                      서울 (강남 전시장)
                    </option>
                    <option value="광주 (광주 전시장/서비스센터)">
                      광주 (광주 전시장/서비스센터)
                    </option>
                    <option value="Daegu (대구 전시장)">
                      Daegu (대구 전시장)
                    </option>
                    <option value="대전 (대전 전시장)">
                      대전 (대전 전시장)
                    </option>
                    <option value="부산 (부산 전시장)">
                      부산 (부산 전시장)
                    </option>
                    <option value="분당 (분당 전시장)">
                      분당 (분당 전시장)
                    </option>
                    <option value="서울 (송파 전시장)">
                      서울 (송파 전시장)
                    </option>
                    <option value="일산 (일산 전시장/서비스센터)">
                      일산 (일산 전시장/서비스센터)
                    </option>
                    <option value="서울 (한남 전시장/서비스센터)">
                      서울 (한남 전시장/서비스센터)
                    </option>
                  </select>
                  <div className={`text${this.state.isFocus ? "up" : ""}`}>
                    가까운 전시장
                  </div>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text" id="10">
                    <option value=""></option>
                    <option value="0-3개월">0-3개월</option>
                    <option value="4-6개월">4-6개월</option>
                    <option value="7-12개월">7-12개월</option>
                    <option value="12개월 이후">12개월 이후</option>
                    <option value="계획없음">계획없음</option>
                  </select>
                  <div className={`text${this.state.isFocus ? "up" : ""}`}>
                    신차구입 예정시기
                  </div>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text" id="11">
                    <option value=""></option>
                    <option value="그란카브리오 스포츠">
                      그란카브리오 스포츠
                    </option>
                    <option value="그란투리스모 스포츠">
                      그란투리스모 스포츠
                    </option>
                    <option value="기블리">기블리</option>
                    <option value="기블리 S Q4">기블리 S Q4</option>
                    <option value="기블리 디젤">기블리 디젤</option>
                    <option value="르반떼">르반떼</option>
                    <option value="르반떼 S">르반떼 S</option>
                    <option value="르반떼 디젤">르반떼 디젤</option>
                    <option value="르반떼 GTS">르반떼 GTS</option>
                    <option value="콰트로포르테">콰트로포르테</option>
                    <option value="콰트로포르테 GTS">콰트로포르테 GTS</option>
                    <option value="콰트로포르테 S Q4">콰트로포르테 S Q4</option>
                    <option value="콰트로포르테 디젤">콰트로포르테 디젤</option>
                  </select>
                  <div className={`text${this.state.isFocus ? "up" : ""}`}>
                    기블리
                  </div>
                </div>

                <Inputcom star="" valueV="문의 및 기타 의견" />

                <div className="question">현재 보유 차종</div>

                <div className="row">
                  <div className="require">*</div>
                  <input className="beautify" type="text" id="13"></input>
                  <div className={`text${this.state.isFocus ? "up" : ""}`}>
                    브랜드-모델
                  </div>
                </div>

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
