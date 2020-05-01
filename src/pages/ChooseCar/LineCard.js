import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./LineCard.scss";

class LinesCard extends Component {
  goToBuildCar = () => {
    this.props.history.push("/buildcar");
  };

  render() {
    const { desc } = this.props;
    console.log(desc);
    const description = desc.map((lines) => {
      return <p>{lines}</p>;
    });
    return (
      <div className="LineCard" role="group">
        <div className="preview">
          <div className="lineCarousel">
            <div className="arrowsCon"></div>
            <div className="slickSlider">
              <div className="itemSlickSlider">
                <div className="imagfigure">
                  <img
                    className="slidercarImg"
                    src={this.props.img}
                    alt="carimgslider"
                  />
                </div>
              </div>
              <div className="itemSlickSlider"></div>
              <div className="itemSlickSlider"></div>
              <div className="itemSlickSlider"></div>
            </div>
          </div>
        </div>

        <div className="content">
          <button
            className="primaryCta"
            type="button"
            onClick={this.goToBuildCar}
          >
            <span className="dataBu">선택</span>
          </button>
          <div className="cardTitle">
            <span className="dataK">{this.props.dataK}</span>
          </div>
          <div className="linesActions"></div>
          <div className="description">
            <span>{this.props.desspan}</span>
          </div>
          <div className="detailDescription">
            <p>{this.props.des}</p>
            {description}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LinesCard);
