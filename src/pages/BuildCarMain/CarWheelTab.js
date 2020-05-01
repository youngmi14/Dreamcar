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
    fetch("http://localhost:3000/data/Wheelcolordata.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          imgUrl: res.WhellColorData,
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
        <div onClick={this.btnActiveInner}>
          {imgUrl.map((item) => {
            return <img className="active" src={item.url} alt="solid Color" />;
          })}
          <span class="iconName"></span>
        </div>
      </div>
    );
  }
}

export default CarWheelTab;
