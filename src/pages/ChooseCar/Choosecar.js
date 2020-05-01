import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Loded from "../ChooseCar/Loded";
import Apply from "../Apply/Apply";
import Footer from "../Footer/Footer";
import "./Choosecar.scss";

class Choosecar extends Component {
  render() {
    return (
      <div className="Choosecar">
        <Nav />
        <Loded />
        <Apply />
        <Footer />
      </div>
    );
  }
}

export default Choosecar;
