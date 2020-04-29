import React, { Component } from "react";
import ColorPalette from "./ScrollSection";
import ScrollSection from "./ScrollSection";

class SubSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  sectionClickingHandler = () => {};

  render() {
    const { activeBtnId } = this.props;

    return (
      <>
        {!this.props.btnThumbDescInt && (
          <ScrollSection
            onClick={this.sectionClickingHandler}
            stringValSolid={this.props.btnThumbDescSolid}
            colorSolid={this.props.btnThumbColorSolid}
            stringValMetal={this.props.btnThumbDescMetal}
            colorMetal={this.props.btnThumbColorMetal}
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
