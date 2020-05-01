import React, { Component } from "react";

export class CarBreak extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: [],
      btnActiveInner: 0,
    };
  }

  componentDidMount() {
    // 컴디마는 한번만 실행
    fetch("http://localhost:3000/data/caliperThumbNail.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          imgUrl: res.caliperThumbnail,
        });
      });
  }

  render() {
    const { imgUrl } = this.state;
    return (
      <div class="scrollSectionWheel">
        <div onClick={this.btnActiveInner}>
          {imgUrl.map((item) => {
            return (
              <>
                <img src={item.thumbnail_url} alt="solid Color" />
                <span class="iconName"></span>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CarBreak;
