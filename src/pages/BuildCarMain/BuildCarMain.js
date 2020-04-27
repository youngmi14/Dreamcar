import React, { Component } from "react";
import CarSection from "./CarSection";
import CarSummary from "./CarSummary";
import Nav from "../../components/Nav/Nav";
import "./BuildCarMain.scss";

let lastScrollY = 0;
let ticking = false;

class BuildCarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hrefLink: "",
      tabId: "",
    };
  }

  carCont = React.createRef();

  componentDidMount() {
    window.addEventListener("scroll", this.scrollToSection, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollToSection);
  }

  navMoveHandler = (id) => {
    this.setState({
      tabId: id,
    });
  };

  mouseLeaveHandler = (e, msg) => {
    e.preventDefault();

    this.setState({
      tabId: msg,
    });
  };

  scrollToSection = () => {
    lastScrollY = window.scrollY;
    // console.log(this.carCont.current.style.top); //CarCont Top이 안읽혀지는듯

    if (!ticking) {
      window.requestAnimationFrame(() => {
        //this.carCont.current.style.top = `${lastScrollY}px`;
        ticking = false;
      });

      ticking = true;
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
                  <li
                    name="tabId"
                    onMouseOut={this.mouseLeaveHandler}
                    onClick={this.scrollToSection}
                  >
                    <a
                      href="#"
                      className={this.state.tabId === idx ? "clicked" : ""}
                      onClick={() => this.navMoveHandler(idx)}
                      onMouseOut={(e) =>
                        this.mouseLeaveHandler(e, "notClicked")
                      }
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <section className="mainView">
            <CarSection ref={this.carCont} />
            <CarSummary />
          </section>
        </section>
      </div>
    );
  }
}

export default BuildCarMain;
