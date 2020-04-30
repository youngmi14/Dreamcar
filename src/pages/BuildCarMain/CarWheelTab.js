import React, { Component } from "react";
import "./BuildCarMain.scss";

class CarWheelTab extends Component {
  constructor() {
    super();

    this.state = {
      imgUrl: [],
    };
  }

  componentDidMount() {
    // 컴디마는 한번만 실행
    fetch("http://localhost:3000/data/Wheelcolordata.json") //url에 데이터 요청.
      .then((res) => res.json()) //then(들어온다면) ->  json으로 들어오는 데이터를 js obj로 변환.
      .then((res) => {
        this.setState({
          imgUrl: res.WhellColorData,
        });
      });
  }

  render() {
    const { imgUrl } = this.state;
    return (
      <div class="scrollSection">
        <div class="subSelection">
          <div class="innerSection">
            <div class="colorPalette">
              <button class="active">
                {imgUrl.map((item) => {
                  return <img src={item.url} alt="solid Color" />;
                })}
                <span class="iconName"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarWheelTab;
