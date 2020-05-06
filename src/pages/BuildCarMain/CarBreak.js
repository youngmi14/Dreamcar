import React, { Component } from "react";

export class CarBreak extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: [],
      breakBtnColor: [],
    };
  }

  breakBtnColor = (idx) => {
    this.setState(
      {
        breakBtnColor: idx,
      },
      () => console.log("idxx: ", idx)
    );
  };

  componentDidMount() {
    // 컴디마는 한번만 실행
    fetch("http://localhost:3000/data/caliperThumbNail.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            imgUrl: res.caliperThumbnail,
          },
          () => console.log("브레이크 ", res)
        );
      });
  }

  render() {
    const { imgUrl } = this.state;

    const mappedComp = imgUrl.map((item, idx) => {
      return (
        <div
          onClick={() => this.breakBtnColor(idx)}
          className={this.state.breakBtnColor === idx ? "active" : ""}
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

export default CarBreak;
