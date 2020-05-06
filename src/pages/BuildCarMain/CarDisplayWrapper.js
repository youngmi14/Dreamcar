import React, { Component } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubSelection from "./SubSelection";
import Slider from "react-slick";
import CarWheelTab from "./CarWheelTab";
import injectStyle from "../../injectStyle";
import ImgGetReady from "../ImgGetReady";

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

  handleBtnStyler = (e, id, idx) => {
    e.preventDefault();

    const { btnSelection } = this.state;

    switch (id) {
      case 0:
        this.setState({
          btnSelection: {
            btnSeat: idx,
            btnDashb: btnSelection.btnDashb,
            btnCarpet: btnSelection.btnCarpet,
            btnSteering: btnSelection.btnSteering,
          },
        });
        break;
      case 1:
        this.setState({
          btnSelection: {
            btnSeat: btnSelection.btnSeat,
            btnDashb: idx,
            btnCarpet: btnSelection.btnCarpet,
            btnSteering: btnSelection.btnSteering,
          },
        });
        break;
      case 2:
        this.setState({
          btnSelection: {
            btnSeat: btnSelection.btnSeat,
            btnDashb: btnSelection.btnDashb,
            btnCarpet: idx,
            btnSteering: btnSelection.btnSteering,
          },
        });
        break;
      case 3:
        this.setState({
          btnSelection: {
            btnSeat: btnSelection.btnSeat,
            btnDashb: btnSelection.btnDashb,
            btnCarpet: btnSelection.btnCarpet,
            btnSteering: idx,
          },
        });
        break;
      default:
        break;
    }
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

    const { imgUrl } = this.props;

    return (
      <div className="carDisplayWrapper">
        <ImgGetReady />
        <Slider {...settings}>
          {/* imgUrl바꿔서 여기선 map만 해주는걸로 */}
          {imgUrl.map((url, idx, arr) => {
            return (
              <div>
                <img
                  key={idx}
                  src={url}
                  style={this.state.style.container}
                  alt="car img"
                />
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
              intOnclick={this.props.intOnclick}
              btnSelection={this.props.btnSelection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CarDisplayWrapper;
