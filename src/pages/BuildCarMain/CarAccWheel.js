import React, { Component } from "react";
import CarAccBtnCount from "./CarAccBtnCount";

export class CarAccWheel extends Component {
  constructor() {
    super();
    this.state = {
      carAcc: [],
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/data/caracc.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            carAcc: res.accessory[4]["타이어 및 휠"],
          },
          () => console.log("acc", res.accessory[4]["타이어 및 휠"])
        );
      });
  };
  render() {
    const { carAcc } = this.state;

    const mappedComp = carAcc.map((item) => {
      return <CarAccBtnCount name={item.name} imgSrc={item.thumbnail_url} />;
    });
    return <div className="wheel">{mappedComp}</div>;
  }
}

export default CarAccWheel;
