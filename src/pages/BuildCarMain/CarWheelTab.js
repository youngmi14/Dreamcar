import React, { Component } from "react";
import "./BuildCarMain.scss";

class CarWheelTab extends Component {
  constructor() {
    super();

    this.state = {
      imgUrl: [],
      wheelBtnColor: [],
    };
  }

  componentDidMount() {
    // 컴디마는 한번만 실행
    fetch("http://13.59.219.151:8000/car/wheel/1")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            imgUrl: res["wheel thumbnail"],
          },
          () => console.log("wheel: ", res["wheel thumbnail"])
        );
      });
  }

  wheelBtnColor = (idx) => {
    this.setState(
      {
        wheelBtnColor: idx,
      },
      () => console.log("idxx: ", idx)
    );
  };

  render() {
    const { wheelBtnColor } = this.state;
    const { imgUrl } = this.state;

    const mappedComp = imgUrl.map((item, idx) => {
      return (
        <div
          onClick={() => this.wheelBtnColor(idx)}
          className={this.state.wheelBtnColor === idx ? "active" : ""}
        >
          <img src={item.thumbnail_url} alt="metal Color" />
          <span class="iconName"></span>
        </div>
      );
    });

    return (
      <div className="scrollSectionWheel">
        <div className="innerSection">
          <div className="colorPalette">{mappedComp}</div>
        </div>
      </div>
    );
  }
}

export default CarWheelTab;
