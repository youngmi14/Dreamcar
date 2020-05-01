import React, { Component } from "react";
import CarAccBtnCount from "./CarAccBtnCount";

class CarAccSoultion extends Component {
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
            carAcc: res.accessory[3]["이동 및 적재 솔루션"],
          },
          () => console.log("acc", res.accessory[3]["이동 및 적재 솔루션"])
        );
      });
  };
  render() {
    const { carAcc } = this.state;
    const mappedComp = carAcc.map((item) => {
      return <CarAccBtnCount name={item.name} imgSrc={item.thumbnail_url} />;
    });

    return <div className="soultion">{mappedComp}</div>;
  }
}

export default CarAccSoultion;
