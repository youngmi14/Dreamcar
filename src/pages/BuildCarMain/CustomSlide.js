import React, { Component } from "react";
import injectStyle from "../../injectStyle";
import { image1 } from "../../images/gfx6.jpeg";
import { image2 } from "../../images/gfx6new.jpeg";

class CustomSlide extends Component {
  constructor(props) {
    super(props);
    //기능 구분 -> 엘리먼트 변수안에서는 그냥 리턴만 될수있게 만들고, 여기서 데이터를 바꿔서 보내주는 방식

    this.state = {
      st1: require("../../images/gfx6.jpeg"),
      st2: require("../../images/gfx6new.jpeg"),
    };

    this.state.style = {
      container: {
        width: "100%",
        WebkitAnimation: "imgTransition 1.3s ease-in-out",
        height: "max-content",
        position: "relative",
        backgroundImg: "url(../../images/gfx6.jpeg)",
        backgroundSize: "cover",
        overflow: "hidden",
      },
    };
  }

  state = {
    isImgChanged: true,
  };

  render() {
    const { imgUrlUnchanged, imgUrlChanged } = this.props;
    const { isImgChanged, st1, st2 } = this.state;

    const keyframesStyle = `
      @-webkit-keyframes imgTransition {
        0% {
            opacity:0.9;
          }
          100% {
            opacity:1;
          }
      }
    `;
    injectStyle(keyframesStyle);
    return (
      <div className="imgUrlChange" style={this.state.style.container}>
        {/* <img src={st1} style={{ zIndex: 0, position: "absolute" }} /> */}
        <img key={imgUrlChanged} src={imgUrlChanged ? st2 : st1} />
      </div>
    );
  }
}

export default CustomSlide;
