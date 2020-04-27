import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Apply from "../Apply/Apply";
import Footer from "../Footer/Footer";
import "./Siseon.scss";

class Siseon extends Component {
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
                <div className="row">
                  <div className="require">*</div>
                  <input className="beautify" type="text" id="5"></input>
                  <label for="firstname" className="ani">
                    이름
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <input className="beautify" type="text" id="5"></input>
                  <label for="firstname" className="ani">
                    성
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <input className="beautify" type="text" id="5"></input>
                  <label for="firstname" className="ani">
                    생년월일
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <input className="beautify" type="text" id="5"></input>
                  <label for="firstname" className="ani">
                    휴대폰
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text" id="5"></select>
                  <label for="firstname" className="ani">
                    주소(시)
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <input className="beautify" type="text" id="5"></input>
                  <label for="firstname" className="ani">
                    주소(구,동)
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <input className="beautify" type="text" id="5"></input>
                  <label for="firstname" className="ani">
                    이메일
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text" id="5"></select>
                  <label for="firstname" className="ani">
                    성별
                  </label>
                </div>

                <div className="question">시승신청</div>

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text"></select>
                  <label for="firstname" className="ani">
                    가까운 전시장
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text"></select>
                  <label for="firstname" className="ani">
                    신차구입 예정시기
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <select className="beautify" type="text"></select>
                  <label for="firstname" className="ani">
                    기블리
                  </label>
                </div>

                <div className="row">
                  <div className="require">*</div>
                  <input className="beautify" type="text" id="5"></input>
                  <label for="firstname" className="ani">
                    문의사항 및 기타 의견
                  </label>
                </div>

                <div className="question">현재 보유 차종</div>

                <div className="row">
                  <div className="require">*</div>
                  <input className="beautify" type="text" id="5"></input>
                  <label for="firstname" className="ani">
                    브랜드-모델
                  </label>
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

export default Siseon;
