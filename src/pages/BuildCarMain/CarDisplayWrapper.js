import React, { Component } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubSelection from "./SubSelection";
import Slider from "react-slick";
import CarWheelTab from "./CarWheelTab";

class CarDisplayWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnColor: "#fff",
      activeBtnId: 0,
      btnNameTab: "",
      tabId: 0,
      activeSlide: 0,
    };
    this.carCont = React.createRef();
  }

  btnTabcolorChange = (idx) => {
    this.setState({
      activeBtnId: idx,
    });
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      arrows: true,
      prevArrow: (
        <button type="button" class="slick-prev">
          <MaterialIcon icon="keyboard_arrow_left" size={45} />
        </button>
      ),
      nextArrow: (
        <button type="button" class="slick-prev">
          <MaterialIcon icon="keyboard_arrow_right" size={45} />
        </button>
      ),
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (oldIndex, newIndex) => {
        this.setState({ activeSlide: newIndex });
      },
    };

    return (
      <div className="carDisplayWrapper">
        <Slider {...settings}>
          {this.props.imgUrl.map((url, idx, arr) => {
            if (!this.props.btnThumbDescInt) {
              if (
                this.state.activeBtnId === 1 ||
                this.state.activeBtnId === 2
              ) {
                return (
                  <div>
                    <img key={url} src={arr[3]} />
                  </div>
                );
              }
            }
            return (
              <div>
                <img key={url} src={url} />
              </div>
            );
          })}
        </Slider>
        <div className="carOutlookTapCont">
          <ul className="toolBar">
            {this.props.btnTabName.map((itemName, idx) => {
              return (
                <li
                  role="button"
                  className={this.state.activeBtnId === idx ? "btnClicked" : ""}
                  onClick={() => this.btnTabcolorChange(idx)}
                >
                  {itemName}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="selectionsCont">
          <div className="scrollSection">
            <SubSelection
              activeBtnId={this.state.activeBtnId}
              btnThumbDescSolid={this.props.btnThumbDescSolid}
              btnThumbDescMetal={this.props.btnThumbDescMetal}
              btnThumbDescInt={this.props.btnThumbDescInt}
              btnThumbColorExterior={this.props.btnThumbColorExterior}
              btnThumbColorInt={this.props.btnThumbColorInt}
              btnThumbDescInt={this.props.btnThumbDescInt}
              btnThumbColorInt={this.props.btnThumbColorInt}
            />
            {/* <SubSelection
              activeBtnId={this.state.activeBtnId}
              btnThumbDescSolid={this.props.btnThumbDescSolid}
              btnThumbDescMetal={this.props.btnThumbDescMetal}
              btnThumbDescInt={this.props.btnThumbDescInt}
              btnThumbColorExterior={this.props.btnThumbColorExterior}
              btnThumbColorInt={this.props.btnThumbColorInt}
              btnThumbDescInt={this.props.btnThumbDescInt}
              btnThumbColorInt={this.props.btnThumbColorInt}
            /> */}
            {/* {this.state.activeBtnId === 1 && <CarWheelTab />} */}
          </div>
        </div>
      </div>
    );
  }
}

export default CarDisplayWrapper;
