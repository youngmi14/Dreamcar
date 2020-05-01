import React, { Component } from "react";

export class CarBreak extends Component {
  constructor() {
    super();
    this.state = {
      btnActiveInner: 0,
    };
  }

  componentDidMount() {
    // 컴디마는 한번만 실행
    fetch("http://localhost:3000/data/BreakCaliper.json") //url에 데이터 요청.
      .then((res) => res.json()) //then(들어온다면) ->  json으로 들어오는 데이터를 js obj로 변환.
      .then((res) => {
        this.setState({ monsters: res });
      });
  }

  render() {
    return (
      <div className="CarWheelTab">
        <div className="CarWheelTabBox">
          <ul className="wheelList">
            <li>Break</li>
            <li>Break</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CarBreak;
