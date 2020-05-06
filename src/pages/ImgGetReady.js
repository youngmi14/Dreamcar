import React, { Component } from "react";

class ImgGetReady extends Component {
  state = {
    resResult: [],
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/data/exterior-image-urls.json").then((res) =>
      res.json().then((res) => {
        this.setState({
          resResult: res.exterior,
          //interior도 받아오기
        });
      })
    );
  };

  style = {};

  render() {
    return (
      <div
        style={{
          top: "-999999px",
          position: "fixed",
          overflow: "hidden",
          left: "-9999px",
          height: "1px",
          width: "1px",
          opacity: 0.01,
        }}
      >
        {this.state.resResult}
      </div>
    );
  }
}

export default ImgGetReady;
