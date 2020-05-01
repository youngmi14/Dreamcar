import React, { Component } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubSelection from "./SubSelection";
import Slider from "react-slick";
import CarWheelTab from "./CarWheelTab";
import injectStyle from "../../injectStyle";

class CarDisplayWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnColor: "#fff",
      activeBtnId: 0,
      btnNameTab: "",
      tabId: 0,
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
      lazyLoad: true,
    };

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

    const { imgUrl, imgUrlExterior } = this.props;

    return (
      <div className="carDisplayWrapper">
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
          {imgUrlExterior}
        </div>
        <Slider {...settings}>
          {/* imgUrl바꿔서 여기선 map만 해주는걸로 */}
          {imgUrl.map((url, idx, arr) => {
            return (
              <div>
                <img key={url} src={url} style={this.state.style.container} />
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
              interiorColorData={this.props.interiorColorData}
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
