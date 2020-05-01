import React, { Component } from "react";
import "./Models.scss";

class Models extends Component {
  constructor() {
    super();
    this.state = {
      tabColor: 0,
    };
  }

  tabcolorChange = (idx) => {
    this.setState({
      tabColor: idx,
    });
  };

  render() {
    const tabName = ["Ghibli", "Levante", "Quattroporte", "", ""];

    return (
      <div className="Models">
        <ul className="modelsWrapper">
          {tabName.map((name, idx) => {
            return (
              <li
                onClick={() => this.tabcolorChange(idx)}
                className={
                  this.state.tabColor === idx
                    ? "modelsubActive"
                    : "modelUnhighlighted"
                }
              >
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Models;
