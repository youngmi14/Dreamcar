import React, { Component } from 'react'
import "./BuildCarMain.scss";
import {CarSection} from './CarSection';
import {CarSummary} from './CarSummary';

export class BuildCarMain extends Component {

    constructor(props){
        super(props);
    }

    state = {
        isNavClicked: false
    }

    navMoveHandler = (e) => {

            console.log(e.target);
            this.setState({
                isNavClicked: true
            });
            e.target.className="clicked";
    }

    mouseLeaveHandler = (e) => {
        e.target.className="";
    }

    render() {

        return (
            <div className="BuildCarMain">
                <nav className="topNav">
                    <ul className="tabList">
                        <li name="tabId" onClick={this.navMoveHandler} onMouseOut={this.mouseLeaveHandler}>
                            <a className="">LINES</a>
                            <a href="#carDisplay1" className="">외관</a>
                            <a href="#carDisplay2" className="">실내</a>
                            <a href="#carSelections" className="">패키지</a>
                            <a className="">옵션</a>
                            <a className="">액세서리</a>
                            <a className="">요약</a>
                        </li>
                    </ul>
                </nav>

                <section className="mainView">
                     <CarSection />
                     <CarSummary />
                </section>

            </div>
        )
    }
}

export default BuildCarMain;
