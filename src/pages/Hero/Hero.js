import React, { Component } from "react";
import MainHero from "../../images/cq5dam.web.1400.10000.jpeg";
import "./Hero.scss";

<<<<<<< HEAD
export class Hero extends Component {
=======
class Hero extends Component {
>>>>>>> 4d9f5d66aa2c4514b05890578f3060e405eca324
  render() {
    return (
      <div className="Hero">
        <img src={MainHero} />
        <div className="TextCt">
          <p>
            <span className="CarName">Levante Trofeo</span>
            <span className="Desc">
              마세라티 르반떼 라인업의 최상급 슈퍼 SUV
            </span>
          </p>
          <div className="WhiteCt">자세히보기</div>
        </div>
      </div>
    );
  }
}

export default Hero;
