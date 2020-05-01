import React, { Component } from "react";
import "./BuildCarMain.scss";

class CarWheelTab extends Component {
  constructor() {
    super();

    this.state = {
      imgUrl: [],
      btnActiveInner: 0,
    };
  }

  componentDidMount() {
    // 컴디마는 한번만 실행
    fetch("http://localhost:3000/data/wheelThumbNail.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            imgUrl: res.wheelThumbnail,
          },
          () => console.log("wheel: ", res.wheelThumbnail)
        );
      });
  }

  btnActiveInner = (idx) => {
    this.setState({
      btnActiveInner: idx,
    });
  };

  render() {
    const { imgUrl } = this.state;
    const mappedComp = imgUrl.map((item) => {
      return (
        <>
          <img src={item.thumbnail_url} alt="metal Color" />
          <span class="iconName"></span>
        </>
      );
    });
    return (
      <div class="scrollSectionWheel">
        <div onClick={this.btnActiveInner}>{mappedComp}</div>
      </div>
    );
  }
}

export default CarWheelTab;
