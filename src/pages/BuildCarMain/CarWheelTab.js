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
        this.setState({
          imgUrl: res.wheelThumbnail,
        });
      });
  }

  btnActiveInner = (idx) => {
    this.setState({
      btnActiveInner: idx,
    });
  };

  render() {
    const { imgUrl } = this.state;
    return (
      <div class="scrollSectionWheel">
        <div className="colorPalette" onClick={this.btnActiveInner}>
          {imgUrl.map((item) => {
            return (
              <>
                <img src={item.thumbnail_url} alt="solid Color" />
                <span class="iconName">d</span>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CarWheelTab;
