import React, { Component } from "react";
import { Link, Route, Switch, Router } from "react-router-dom";
import CarSection from "./CarSection";
import CarSummary from "./CarSummary";
import Nav from "../../components/Nav/Nav";
import "./BuildCarMain.scss";
import MaterialIcon, { colorPalette } from "material-icons-react";

class Thankyou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hrefLink: "#",
      tabId: 0,
      navStylerStyle: "",
      isNotOpen: false,
      nameVal: "",
      emailVal: "",
      configCode: "",
      num: 1,
      btnSelection: {
        btnSeat: 0,
        btnDashb: 0,
        btnCarpet: 0,
        btnSteering: 0,
      },
      thumbId: 0,
    };
    this.carCont = React.createRef();
    this.href = React.createRef();
  }

  getParam = (sname) => {
    let params = this.props.location.search.substr(
      this.props.location.search.indexOf("?") + 1
    );

    let sval = "";

    params = params.split("&");

    for (var i = 0; i < params.length; i++) {
      let temp = params[i].split("=");

      if ([temp[0]] == sname) {
        sval = temp[1];
      }
    }

    return sval;
  };

  componentDidMount = () => {
    const seatNum = this.getParam("seatNum");
    console.log(seatNum);
    const dashNum = this.getParam("dashNum");
    console.log(dashNum);
    const carpetNum = this.getParam("carpetNum");
    console.log(carpetNum);
    const steeringNum = this.getParam("steeringNum");
    console.log(steeringNum);
    const nameInput = this.getParam("name");
    const emailInput = this.getParam("email");

    fetch("http://13.59.219.151:8000/car/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mvl: 1,
        exterior: 1,
        wheel: 1,
        caliper: 1,
        seat: `${seatNum}`,
        dashboard: `${dashNum}`,
        carpet: `${carpetNum}`,
        steering: `${steeringNum}`,
        package: [1],
        accessory: [{ id: 2, quantity: 4 }],
        email: `${emailInput}`,
        name: `${nameInput}`,
        contact_channel: [
          { mail: 0, call: 0, sns: 0, sms: 1, fax: 1, email: 0 },
        ],
        privacy_check: 1,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // if (response.token) {
        //   localStorage.setItem("wtw-token", response.token);
        // }
        this.setState({
          configCode: response["code"],
        });
      });
  };

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      this.carCont.current.carCont.scrollToSection
    );
  }

  modalContShowing = (e) => {
    e.preventDefault();
    this.setState({
      isNotOpen: false,
    });
  };

  modalClose = () => {
    this.setState({
      isNotOpen: true,
    });
  };

  formEventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  formSubmitHandler = () => {
    const qs = (data) =>
      Object.entries(data)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

    const { nameVal, emailVal } = this.state;
    console.log(this.state.nameVal);

    const result = qs({
      name: nameVal,
      email: emailVal,
    });

    const url = `/buildcar/thankyou?${result}`;
    this.props.history.push(url);
  };

  handleBtnStyler = (e, id, idx) => {
    e.preventDefault();

    const { btnSelection } = this.state;

    switch (id) {
      case 0:
        this.setState({
          btnSelection: {
            btnSeat: idx,
            btnDashb: btnSelection.btnDashb,
            btnCarpet: btnSelection.btnCarpet,
            btnSteering: btnSelection.btnSteering,
          },
        });
        break;
      case 1:
        this.setState({
          btnSelection: {
            btnSeat: btnSelection.btnSeat,
            btnDashb: idx,
            btnCarpet: btnSelection.btnCarpet,
            btnSteering: btnSelection.btnSteering,
          },
        });
        break;
      case 2:
        this.setState({
          btnSelection: {
            btnSeat: btnSelection.btnSeat,
            btnDashb: btnSelection.btnDashb,
            btnCarpet: idx,
            btnSteering: btnSelection.btnSteering,
          },
        });
        break;
      case 3:
        this.setState({
          btnSelection: {
            btnSeat: btnSelection.btnSeat,
            btnDashb: btnSelection.btnDashb,
            btnCarpet: btnSelection.btnCarpet,
            btnSteering: idx,
          },
        });
        break;
      default:
        break;
    }
  };

  navStyler = (e) => {
    e.preventDefault();
    const lastScrollY = window.scrollY;
    if (lastScrollY >= 0 && lastScrollY < 840) {
      this.setState({
        tabId: 1,
      });
    } else if (lastScrollY >= 840 && lastScrollY < 1660) {
      this.setState({
        tabId: 2,
      });
    } else if (lastScrollY >= 1660 && lastScrollY < 2240) {
      this.setState({
        tabId: 3,
      });
    } else if (lastScrollY >= 2240 && lastScrollY < 2360) {
      this.setState({
        tabId: 4,
      });
    } else if (lastScrollY >= 2360 && lastScrollY < 2600) {
      this.setState({
        tabId: 5,
      });
    } else if (lastScrollY >= 2600) {
      this.setState({
        tabId: 6,
      });
    } else {
      return;
    }
  };

  navMoveHandler = (e, id) => {
    this.setState({
      tabId: id,
    });

    e.preventDefault();

    switch (id) {
      case 1:
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scroll({
          top: 840,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 3:
        window.scroll({
          top: 1660,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 4:
        window.scroll({
          top: 2240,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 5:
        window.scroll({
          top: 2240,
          left: 0,
          behavior: "smooth",
        });
        break;

      case 6:
        this.props.history.push("/sum");
        break;

      default:
        break;
    }
  };

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
    return (
      <div className="BuildCarMain">
        <Nav />

        <section className="BuildCarContent">
          <nav className="topNav">
            <ul className="tabList">
              {tabNameList.map((item, idx) => {
                return (
                  <li name={item} onMouseOut={this.mouseLeaveHandler}>
                    <a
                      //href={this.state.hrefLink}
                      className={this.state.tabId === idx ? "clicked" : ""}
                      onScroll={(e) => this.navStyler(e)}
                      onClick={(e) => this.navMoveHandler(e, idx)}
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

          <section className="mainView">
            <div
              className="modalCont"
              style={
                this.state.isNotOpen
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
            >
              <MaterialIcon icon="close" size={55} onClick={this.modalClose} />
              <div className="modalOuter">
                <div className="modalInner">
                  <div className="modalHeader">
                    <h2>내 차고- 저장/ 로딩</h2>
                  </div>
                </div>
                <div className="dialogueBody">
                  <div className="headerBody">
                    <ul>
                      <li>구성 저장하기</li>
                      <li>기존 구성 열기</li>
                    </ul>
                  </div>
                  <div className="thankyou">
                    <p>
                      감사합니다!
                      <br /> <br /> Ghibli이 성공적으로 저장되었습니다.
                      <br /> 저장된 구성의 상세 정보가 포함된 자동 이메일을
                      보내드립니다.
                      <br /> 이 구성에 관련된 코드:
                      <br />
                    </p>

                    <div className="saveCode">{this.state.configCode}</div>

                    <div className="rowBtn">
                      <div>시승 신청</div>
                      <div>견적 신청</div>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
            <CarSection
              scrollToSection={this.scrollToSection}
              ref={this.carCont}
              tabId={this.state.tabId}
              intOnclick={this.handleBtnStyler}
              btnSelection={this.state.btnSelection}
            />
            <CarSummary
              onClickHandler={(e) => {
                this.modalContShowing(e);
              }}
            />
          </section>
        </section>
      </div>
    );
  }
}

export default Thankyou;
