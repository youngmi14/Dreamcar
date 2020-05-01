import React, { Component } from "react";
import "./CcFooter.scss";

class CcFooter extends Component {
  render() {
    return (
      <div className="CcFooter">
        <div className="footerRow">
          <ul className="left">
            <li>
              <a>
                <span>주의문</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CcFooter;
