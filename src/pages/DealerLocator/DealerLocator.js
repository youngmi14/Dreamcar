import React, { Component } from "react";
import "../DealerLocator/DealerLocator.scss";
import Nav from "../../components/Nav/Nav";

class DealerLocator extends Component {
  render() {
    return (
      <div className="DealerLocator">
        {/* <Nav /> */}

        <div className="input-wrapper table">
          <div className="row">
            <div id="myposition">
              <img
                src="https://www.maserati.com/etc.clientlibs/maserati-shoppingtools/dealer-locator/default/clientlib/resources/img/svg/input-location.svg"
                alt=""
              />
            </div>
            <div className="cell input-text middle">
              <form id="search-submit" onsubmit="return false;">
                <input
                  id="input-address"
                  type="text"
                  name="zip-location"
                  placeholder="주소 또는 우편번호 입력"
                  autocomplete="off"
                  className=""
                />
                <img
                  className="clear"
                  src="https://www.maserati.com/etc.clientlibs/maserati-shoppingtools/dealer-locator/default/clientlib/resources/img/svg/read-more-grey.svg"
                  alt="clear"
                />
              </form>
            </div>
            <div className="cell input-button middle center">
              <img
                className="search"
                src="https://www.maserati.com/etc.clientlibs/maserati-shoppingtools/dealer-locator/default/clientlib/resources/img/svg/search.svg"
                alt="search"
              />
            </div>
            <div className="cell locate-button middle center">
              <img
                className="locate"
                src="https://www.maserati.com/etc.clientlibs/maserati-shoppingtools/dealer-locator/default/clientlib/resources/img/store-locator-my-position-button.png"
                alt="locate myself"
              />
            </div>

            <div className="cell checkboxes-wrapper right">
              <div className="table">
                <div className="row">
                  <div className="cell middle padded">
                    <input
                      type="checkbox"
                      name="dealers-type"
                      id="dealers-type"
                      className="css-checkbox"
                      checked="checked"
                    />
                    <label
                      id="filter-dealers"
                      for="dealers-type"
                      className="css-label"
                    >
                      전시장
                    </label>
                  </div>
                  <div className="cell middle padded">
                    <input
                      type="checkbox"
                      name="services-type"
                      id="services-type"
                      className="css-checkbox"
                      checked="checked"
                    />
                    <label
                      id="filter-services"
                      for="services-type"
                      className="css-label"
                    >
                      서비스 센터
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DealerLocator;
