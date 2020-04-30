import React, { Component } from "react";
import ColorPalette from "./ScrollSection";
import ScrollSection from "./ScrollSection";

class SubSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  render() {
    const { activeBtnId } = this.props;

    return (
      <>
        {!this.props.btnThumbDescInt && (
          <ScrollSection
            stringValSolid={this.props.btnThumbDescSolid}
            stringValMetal={this.props.btnThumbDescMetal}
            colorExterior={this.props.btnThumbColorExterior}
            // colorMetal={this.props.btnThumbColorMetal}
            stringValInt={this.props.btnThumbDescInt}
            colorInt={this.props.btnThumbColorInt}
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
      </>
    );
  }
}

export default SubSelection;
