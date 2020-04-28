import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CarSection from "./CarSection";
import CarSummary from "./CarSummary";
import Nav from "../../components/Nav/Nav";
import "./BuildCarMain.scss";

class BuildCarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hrefLink: "#",
      tabId: 0,
      navStylerStyle: "",
    };
    this.carCont = React.createRef();
    this.href = React.createRef();
  }

  componentDidMount() {
    window.addEventListener(
      "scroll",
      () => {
        this.navStyler();
      },
      true
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      this.carCont.current.carCont.scrollToSection
    );
  }

  navStyler = () => {
    const lastScrollY = window.scrollY;
    console.log("current ScrollY: ", lastScrollY);
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
        this.setState({
          hrefLink: "#carExterior",
        });

        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 2:
        this.setState({
          hrefLink: "#carInterior",
        });

        window.scroll({
          top: 840,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 3:
        this.setState({
          hrefLink: "#package",
        });

        window.scroll({
          top: 1660,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 4:
        this.setState({
          hrefLink: "#carAcc",
        });
        window.scroll({
          top: 2240,
          left: 0,
          behavior: "smooth",
        });
        break;
      case 5:
        this.setState({
          hrefLink: "#carAcc",
        });

        window.scroll({
          top: 2240,
          left: 0,
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
  };

  mouseLeaveHandler = (e, msg) => {
    e.preventDefault();

    this.setState({
      tabId: msg,
    });
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
                  <li
                    name={item}
                    onMouseOut={this.mouseLeaveHandler}
                    onClick={this.scrollToSection}
                  >
                    <a
                      href={this.state.hrefLink}
                      className={this.state.tabId === idx ? "clicked" : ""}
                      onScroll={this.navStyler}
                      onClick={(e) => this.navMoveHandler(e, idx)}
                      onMouseOut={(e) =>
                        this.mouseLeaveHandler(e, "notClicked")
                      }
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
            <CarSection
              scrollToSection={this.scrollToSection}
              ref={this.carCont}
              tabId={this.state.tabId}
            />
            <CarSummary />
          </section>
        </section>
      </div>
    );
  }
}

export default withRouter(BuildCarMain);
