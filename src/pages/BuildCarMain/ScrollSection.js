import React, { Component } from "react";
import CarWheelTab from "./CarWheelTab";

class ScrollSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { colorExterior } = this.props;
    // console.log(colorExterior[0]);

    const solid = colorExterior.filter((item, idx, arr) => {
      return idx < 2;
    });

    const metal = colorExterior.filter((item, idx, arr) => {
      return idx > 2;
    });

    const { activeBtnId } = this.props;

    const wontRenderedCp = (
      <>
        <div className="scrollSection">
          <div className="subSelection">
            <h5 className="sectionTitle">{this.props.stringValSolid}</h5>
            <div className="innerSection">
              {solid.map((solidItem) => {
                return <div className="colorPalette">{solidItem}</div>;
              })}
            </div>
          </div>
        </div>
        <div className="scrollSection">
          <div className="subSelection">
            <h5 className="sectionTitle">{this.props.stringValMetal}</h5>
            <div className="innerSection">
              {metal.map((metalItem) => {
                return <div className="colorPalette">{metalItem}</div>;
              })}
            </div>
          </div>
        </div>
      </>
    );

    return !activeBtnId && wontRenderedCp;
  }
}

export default ScrollSection;
