import React, { Component } from "react";
import ColorPalette from "./ScrollSection";
import ScrollSection from "./ScrollSection";
import CarWheelTab from "./CarWheelTab";
import CarBreak from "./CarBreak";

class SubSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,

      seatImgUrl: [],
      dashboardImgUrl: [],
      carpetImgUrl: [],
      steeringImgUrl: [],
      headliningImgUrl: [],
    };
  }

  componentDidMount = () => {
    //시트
    fetch("http://localhost:3000/data/seat1.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          seatImgUrl: res.data,
        });
      });

    //대시보드
    fetch("http://localhost:3000/data/dashboard1.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("dashhhhh    ", res.data);
        this.setState({
          dashboardImgUrl: res.data,
        });
      });

    //카펫
    fetch("http://localhost:3000/data/carpet1.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("dashhhhh    ", res.data);
        this.setState({
          carpetImgUrl: res.data,
        });
      });

    //스티어링 힐
    fetch("http://localhost:3000/data/carpet2.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("dashhhhh    ", res.data);
        this.setState({
          steeringImgUrl: res.data,
        });
      });

    //헤드라이닝
    fetch("http://localhost:3000/data/steering1.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("dashhhhh    ", res.data);
        this.setState({
          headliningImgUrl: res.data,
        });
      });
  };

  render() {
    const { activeBtnId } = this.props;

    const { seatImgUrl, dashboardImgUrl, carpetImgUrl } = this.state;

    let relatedComp = null;
    let carpetUrl = null;

    if (this.props.btnThumbDescInt) {
      if (this.props.activeBtnId === 1) {
        let seat1DashUrl = dashboardImgUrl.filter((item, idx) => idx <= 1);
        relatedComp = seat1DashUrl.map((item) => {
          return (
            <button type="button">
              <img src={item.dashboard_thumbnail} alt="color" />
              <span class="iconName"></span>
            </button>
          );
        });
        console.log("comp2 와따");
      } else if (this.props.activeBtnId === 2) {
        carpetUrl = carpetImgUrl.map((item) => {
          return (
            <button type="button">
              <img src={item.carpet_thumbnail} alt="color" />
              <span class="iconName"></span>
            </button>
          );
        });
      }
    }
    return (
      <>
        {!this.props.btnThumbDescInt && (
          <ScrollSection
            stringValSolid={this.props.btnThumbDescSolid}
            stringValMetal={this.props.btnThumbDescMetal}
            colorExterior={this.props.btnThumbColorExterior}
            stringValInt={this.props.btnThumbDescInt}
            colorInt={this.props.btnThumbColorInt}
            activeBtnId={this.props.activeBtnId}
          />
        )}
        {this.props.btnThumbDescInt && (
          <div className="scrollSection">
            <div className="subSelection">
              <h5 className="sectionTitle">{this.props.btnThumbDescInt}</h5>
              <div className="innerSection">
                <div className="colorPalette">
                  {seatImgUrl.map((item) => {
                    return (
                      <button type="button">
                        <img src={item.thumnbnail_url} alt="color" />
                        <span class="iconName"></span>
                      </button>
                    );
                  })}
                  {relatedComp}
                  {carpetUrl}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* 조건문 고치기 */}
        {this.props.btnThumbColorExterior
          ? this.props.activeBtnId === 1 && <CarWheelTab />
          : ""}
        {this.props.btnThumbColorExterior
          ? this.props.activeBtnId === 2 && <CarBreak />
          : ""}
      </>
    );
  }
}

export default SubSelection;
