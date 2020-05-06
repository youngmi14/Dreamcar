import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Loded from "../ChooseCar/Loded";
import Apply from "../Apply/Apply";
import Footer from "../Footer/Footer";
import "./Choosecar.scss";

class Choosecar extends Component {
  state = {
    tabId: 0,
  };

  navStyler = (e) => {
    e.preventDefault();
    const lastScrollY = window.scrollY; //scrollY가 아니라 offsetTop으로 바꿔야할듯..?
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
    e.preventDefault();
    this.props.history.push("./buildcar");

    if (id === 0) {
      this.props.history.push("./choosecar");
    }

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
      <div className="Choosecar">
        <Nav />
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
        <Loded />
        <Apply />
        <Footer />
      </div>
    );
  }
}

export default Choosecar;
