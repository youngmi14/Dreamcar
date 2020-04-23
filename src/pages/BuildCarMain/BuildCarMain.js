import React, { Component } from "react";
import CarSection from "./CarSection";
import CarSummary from "./CarSummary";
import Nav from "../../components/Nav/Nav";
import "./BuildCarMain.scss";

class BuildCarMain extends Component {
  state = {
    isNavClickedClassName: "",
    hrefLink: "#carDisplay2",
    tabNameList: ["외관", "실내", "패키지", "옵션", "액세서리", "요약"],
    tabName: "",
  };

  navMoveHandler = (item) => {
    this.setState({
      tabName: item,
      isNavClickedClassName: "clicked",
    });
  };

  mouseLeaveHandler = (e) => {
    e.preventDefault();

    this.setState({
      isNavClickedClassName: "",
      tabName: this.state.tabName,
    });
  };

  render() {
    const { tabNameList } = this.state;

    return (
      <div className="BuildCarMain">
        <Nav />

        <section className="BuildCarContent">
          <nav className="topNav">
            <ul className="tabList">
              <li name="tabId" onMouseOut={this.mouseLeaveHandler}>
                {tabNameList.map((item) => {
                  return (
                    <a
                      href={this.state.hrefLink}
                      className={
                        this.state.tabName === item
                          ? this.state.isNavClickedClassName
                          : ""
                      }
                      onClick={() => this.navMoveHandler(item)}
                      onMouseOut={this.mouseLeaveHandler}
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
