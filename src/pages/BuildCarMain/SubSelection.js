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
    fetch("http://13.59.219.151:8000/car/seat/1")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          seatImgUrl: res.data,
        });
      });

    //대시보드
    fetch("http://13.59.219.151:8000/car/dashboard/1")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          dashboardImgUrl: res.data,
        });
      });

    //카펫
    fetch("http://13.59.219.151:8000/car/carpet/1")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          carpetImgUrl: res.data,
        });
      });

    //스티어링 힐
    fetch("http://13.59.219.151:8000/car/steering/1")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          steeringImgUrl: res.data,
        });
      });
  };

  render() {
    const { activeBtnId, btnThumbDescInt, btnSelection } = this.props;

    const {
      seatImgUrl,
      dashboardImgUrl,
      carpetImgUrl,
      steeringImgUrl,
    } = this.state;

    let btnThumbDescIntRenew = "";
    let seatImg = null;
    let dashUrl = null;
    let carpetUrl = null;
    let steeringUrl = null;
    let colorId = 0;

    if (btnThumbDescInt) {
      if (activeBtnId === 0) {
        btnThumbDescIntRenew = "가죽";
        seatImg = seatImgUrl.map((item, idx, arr) => {
          if (btnSelection.btnSeat === idx) {
            colorId = arr[idx].seat_id;
          }
          return (
            <button
              type="button"
              onClick={(e) =>
                this.props.intOnclick(e, activeBtnId, idx, colorId)
              }
              className={btnSelection.btnSeat === idx ? "active" : ""}
            >
              <img src={item.thumnbnail_url} alt="color" />
              <span class="iconName"></span>
            </button>
          );
        });
      } else if (activeBtnId === 1) {
        btnThumbDescIntRenew = "";
        let seat1DashUrl = dashboardImgUrl.filter((item) => {
          return item.seat_id === 1;
        });
        dashUrl = seat1DashUrl.map((item, idx, arr) => {
          if (btnSelection.btnDashb === idx) {
            colorId = arr[idx].dashboard_id;
          }
          return (
            <button
              type="button"
              onClick={(e) =>
                this.props.intOnclick(e, activeBtnId, idx, colorId)
              }
              className={btnSelection.btnDashb === idx ? "active" : ""}
            >
              <img src={item.dashboard_thumbnail} alt="color" />
              <span class="iconName"></span>
            </button>
          );
        });
      } else if (activeBtnId === 2) {
        btnThumbDescIntRenew = "카펫";
        let carpetUrl1 = carpetImgUrl.filter((item) => {
          return item.seat_id === 1;
        });
        carpetUrl = carpetUrl1.map((item, idx, arr) => {
          if (btnSelection.btnCarpet === idx) {
            colorId = arr[idx].carpet_id;
          }
          return (
            <button
              type="button"
              onClick={(e) =>
                this.props.intOnclick(e, activeBtnId, idx, colorId)
              }
              className={btnSelection.btnCarpet === idx ? "active" : ""}
            >
              <img src={item.carpet_thumbnail} alt="color" />
              <span class="iconName"></span>
            </button>
          );
        });
      } else if (activeBtnId === 3) {
        btnThumbDescIntRenew = "최고급 가죽";
        let steeringImgUrl1 = steeringImgUrl.filter(
          (item) => item.seat_id === 1
        );
        steeringUrl = steeringImgUrl1.map((item, idx, arr) => {
          if (btnSelection.btnSteering === idx) {
            colorId = arr[idx].steering_id;
          }
          return (
            <button
              type="button"
              onClick={(e) =>
                this.props.intOnclick(e, activeBtnId, idx, colorId)
              }
              className={btnSelection.btnSteering === idx ? "active" : ""}
            >
              <img src={item.steering_thumbnail} alt="color" />
              <span class="iconName"></span>
            </button>
          );
        });
      } else {
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
              <h5 className="sectionTitle">{btnThumbDescIntRenew}</h5>
              <div className="innerSection">
                <div className="colorPalette">
                  {seatImg}
                  {dashUrl}
                  {carpetUrl}
                  {steeringUrl}
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
