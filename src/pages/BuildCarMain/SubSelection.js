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
    };
  }

  render() {
    const { activeBtnId } = this.props;
    console.log("activeButtonId    :", activeBtnId);

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
                  {this.props.btnThumbColorInt}
                </div>
              </div>
            </div>
          </div>
        )}
        {this.props.activeBtnId === 1 && <CarWheelTab />}
        {this.props.activeBtnId === 2 && <CarBreak />}
      </>
    );
  }
}

export default SubSelection;
