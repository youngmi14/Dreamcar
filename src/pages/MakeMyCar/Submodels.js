import React, { Component } from "react";
import ModelVisible from "./ModelVisible";
import "./MakeMyCar.scss";
//import carpic1 from "../../images/makecar1.jpeg";
//import carpic2 from "../../images/makecar2.jpeg";
//import carpic3 from "../../images/makecar3.jpeg";

class Submodels extends Component {
  render() {
    return (
      <div className="Submodels">
        <div className="samemodels">
          <ModelVisible />
        </div>
        <div className="samemodels">
          <ModelVisible />
        </div>
        <div className="samemodels">
          <ModelVisible />
        </div>
      </div>
    );
  }
}

export default Submodels;
