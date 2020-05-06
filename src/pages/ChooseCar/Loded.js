import React, { Component } from "react";
import Title from "../ChooseCar/Title";
import LinsWrapper from "./LinesWrapper";
import CcFooter from "./CcFooter";
import "./Loded.scss";

class Loded extends Component {
  render() {
    return (
      <div className="Loded">
        <div className="ccHeader"></div>
        <div className="menuLines">
          <section className="lines">
            <Title />
            <LinsWrapper />
          </section>
        </div>
        <CcFooter />
      </div>
    );
  }
}

export default Loded;
