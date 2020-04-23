import React, { Component } from 'react'
import "./BuildCarMain.scss";
import CarSection from './CarSection';
import CarSummary from './CarSummary';
import Package from './Package';
import CarAcc from './CarAcc';

class BuildCarMain extends Component {
    render() {
        return (
            <div className="BuildCarMain">
                <nav className="topNav">
                    <ul className="tabList">
                        <li name="tabId">
                            <a>
                                <span className="tabName">LINES</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <section className="mainView">
                     <CarSection />
                     <CarSummary />
                     {/*옵션*/}
                     {/*액세서리*/}
                     {/*최종 가격 확인*/}
                     {/*주의문*/}
                </section>

            </div>
        )
    }
}

export default BuildCarMain
