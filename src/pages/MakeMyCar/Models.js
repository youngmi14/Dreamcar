import React, { Component } from "react";
import "./MakeMyCar.scss";

class Models extends Component {
  render() {
    return (
      <div className="Models">
        <div className="modelsubActive">
          <div className="name">Ghibli</div>
        </div>
        <div className="modelUnhighlighted">
          <div className="name">Levante</div>
        </div>
        <div className="modelUnhighlighted">
          <div className="name">Quattroporte</div>
        </div>
        <div className="modelUnhighlighted">
          <div className="name"></div>
        </div>
        <div className="modelUnhighlighted">
          <div className="name"></div>
        </div>
      </div>
    );
  }
}

export default Models;
