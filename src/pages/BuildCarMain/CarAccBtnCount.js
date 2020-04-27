import React, { Component } from "react";
import "./CarAcc.scss";

class CarAccBtnCount extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  Plus = () => {
    if (this.state.number > 9) {
      return 0;
    }
    this.setState({
      number: this.state.number + 1,
    });
  };

  Minus = () => {
    if (this.state.number < 1) {
      return 0;
    }

    this.setState({
      number: this.state.number - 1,
    });
  };
  render() {
    return (
      <div class="cardBoxCont">
        <li className="cardBox">
          <div className="productImg">
            <img src={this.props.imgSrc} alt="img" />
          </div>
          <div className="cardBoxContent">
            <span className="informaitonBtn">
              {/* <img
                src={require("../../images/CarAccInformationBtn.PNG")}
                alt=""
              /> */}
            </span>
            <h3 className="cardBoxTitle">{this.props.name}</h3>
          </div>
          <div className="countBtn">
            <button className="minusBtn" type="button" onClick={this.Minus}>
              -
            </button>
            <span className="count">{this.state.number}</span>
            <button
              className="plusBtn"
              name="plus1"
              type="button"
              onClick={this.Plus}
            >
              +
            </button>
          </div>
        </li>
      </div>
    );
  }
}
export default CarAccBtnCount;
