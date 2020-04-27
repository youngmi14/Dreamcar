import React, { Component } from "react";
import CarSection from "./CarSection";
import CarSummary from "./CarSummary";
import Nav from "../../components/Nav/Nav";
import "./BuildCarMain.scss";

class BuildCarMain extends Component {
  state = {
    hrefLink: "",
    tabId: "",
  };

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

  render() {
    const tabNameList = ["외관", "실내", "패키지", "옵션", "액세서리", "요약"];

    return (
      <div className="BuildCarMain">
        <Nav />

        <section className="BuildCarContent">
          <nav className="topNav">
            <ul className="tabList">
              <li name="tabId" onMouseOut={this.mouseLeaveHandler}>
                {tabNameList.map((item, idx) => {
                  return (
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
                  );
                })}
              </li>
            </ul>
          </nav>

          <section className="mainView">
            <CarSection />
            <CarSummary />
          </section>
        </section>
      </div>
    );
  }
}

export default BuildCarMain;
