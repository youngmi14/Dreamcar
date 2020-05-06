import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Inputbefore from "./Inputbefore";
import Select from "./Select";
import Apply from "../Apply/Apply";
import Footer from "../Footer/Footer";
import "./Siseon.scss";

class Siseon extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      cityArr: [],
      diArr: [],
      genderArr: [],
      expectArr: [],
      first_name: 1,
      last_name: "",
      birthday: "",
      phone_number: "",
      city: "",
      address: "",
      email: "",
      gender: "",
      privacy_check: "",
      mvl: 1,
      store: "",
      expect_date: "",
      contact_us: "",
      current_car: "",
    };
  }

  componentDidMount = () => {
    //셀렉트 배열 가져오기
    fetch("http://13.59.219.151:8000/shopping/testdrive")
      .then((res) => res.json())
      .then((res) => {
        console.log("res.exhibition :", res.exhibition);
        console.log("제대로 겟해오나");

        this.setState({
          cityArr: res.city,
          diArr: res.exhibition,
          genderArr: res.gender,
          expectArr: res.expect_day,
        });
      });
  };

  postData = () => {
    fetch("http://13.59.219.151:8000/shopping/testdrive", {
      method: "POST",
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        birthday: this.state.birthday,
        phone_number: this.state.phone_number,
        city: Number(this.state.city),
        address: this.state.address,
        email: this.state.email,
        gender: Number(this.state.gender),
        privacy_check: 1,
        mvl: Number(this.state.mvl),
        store: Number(this.state.store),
        expect_date: Number(this.state.expect_date),
        contact_us: this.state.contact_us,
        current_car: this.state.current_car,
        email_privacy: "True",
        fax: "True",
        mail: "True",
        sms: "True",
        call: "True",
        sns: "True",
      }),
    });
    this.props.history.push("/");
  };

  selectCity = (e) => {
    console.log("city    :", e.target.value);
    this.setState({
      city: e.target.value,
    });
  };

  selectGender = (e) => {
    console.log("gender    :", e.target.value);
    this.setState({
      gender: e.target.value,
    });
  };

  selectStore = (e) => {
    console.log("store    :", e.target.value);
    this.setState({
      store: e.target.value,
    });
  };

  selectExpectdate = (e) => {
    console.log("expect_date    :", e.target.value);
    this.setState({
      expect_date: e.target.value,
    });
  };

  eventLastname = (e) => {
    console.log("이름    :", e.target.value);
    this.setState({
      last_name: e.target.value,
    });
  };

  eventFirstname = (e) => {
    console.log("성    :", e.target.value);
    this.setState({
      first_name: e.target.value,
    });
  };

  eventBirthday = (e) => {
    console.log("생일    :", e.target.value);
    this.setState({
      birthday: e.target.value,
    });
  };

  eventPhonenumber = (e) => {
    console.log("폰넘버   :", e.target.value);
    this.setState({
      phone_number: e.target.value,
    });
  };

  eventAddress = (e) => {
    console.log("주소    :", e.target.value);
    this.setState({
      address: e.target.value,
    });
  };

  eventEmail = (e) => {
    console.log("이메일    :", e.target.value);
    this.setState({
      email: e.target.value,
    });
  };

  eventContactus = (e) => {
    console.log("문의사항    :", e.target.value);
    this.setState({
      contact_us: e.target.value,
    });
  };

  eventCurrentcar = (e) => {
    console.log("현재차    :", e.target.value);
    this.setState({
      current_car: e.target.value,
    });
  };

  eventMvl = (e) => {
    console.log("mvl관심    :", e.target.value);
    this.setState({
      mvl: e.target.value,
    });
  };

  render() {
    const { cityArr, diArr, genderArr, expectArr } = this.state;

    return (
      <div className="Siseon">
        <Nav />
        <div className="siseonWrapper">
          <div className="title">시승신청</div>
          <div className="form">
            <form className="formm">
              <div className="half">
                <div className="question">개인 상세 정보</div>

                <Inputbefore
                  star="*"
                  valueV="이름"
                  onSelect={this.eventLastname}
                />

                <Inputbefore
                  star="*"
                  valueV="성"
                  onSelect={this.eventFirstname}
                />

                <Inputbefore
                  star="*"
                  valueV="생년월일 (YYYY-MM-DD)"
                  onSelect={this.eventBirthday}
                />

                <Inputbefore
                  star="*"
                  valueV="휴대폰"
                  onSelect={this.eventPhonenumber}
                />

                <Select
                  star="*"
                  valueV="주소(시)"
                  whatArr={cityArr}
                  keyy="city_name"
                  onSelect={this.selectCity}
                />

                <Inputbefore
                  star="*"
                  valueV="주소(구, 동)"
                  onSelect={this.eventAddress}
                />

                <Inputbefore
                  star="*"
                  valueV="이메일"
                  onSelect={this.eventEmail}
                />

                <Select
                  star="*"
                  valueV="성별"
                  whatArr={genderArr}
                  keyy="gender_type"
                  onSelect={this.selectGender}
                />

                <div className="question">시승신청</div>

                <Select
                  star="*"
                  valueV="가까운 전시장"
                  whatArr={diArr}
                  keyy="exhibition_name"
                  onSelect={this.selectStore}
                />

                <Select
                  star="*"
                  valueV="신차구입 예정시기"
                  whatArr={expectArr}
                  keyy="expect_day"
                  onSelect={this.selectExpectdate}
                />

                <Inputbefore
                  star="*"
                  valueV="마세라티 관심 모델"
                  onSelect={this.eventMvl}
                />

                <Inputbefore
                  star=""
                  valueV="문의 및 기타 의견"
                  onSelect={this.eventContactus}
                />

                <div className="question">현재 보유 차종</div>

                <Inputbefore
                  star="*"
                  valueV="브랜드-모델"
                  onSelect={this.eventCurrentcar}
                />

                <div className="full">
                  <div className="asy">
                    <div className="question">개인정보보호 양식</div>
                    <div className="privacy">
                      <p className="priCommon">
                        본인은 마세라티의
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
                        onClick={this.postData}
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
