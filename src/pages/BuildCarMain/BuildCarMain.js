import React, { Component } from 'react'
import "./BuildCarMain.scss";
import CarSection from './CarSection';
import CarSummary from './CarSummary';
import Nav from '../../components/Nav/Nav';

class TabItems extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const { hrefLink,className,onClick,onMouseOut,tabName } = this.props;

        return(
            <a href={hrefLink} className={this.props.tabName === this.props.isClickedName ? className : ""} onClick={onClick} onMouseOut={onMouseOut} name={tabName}>{tabName}</a>
        );
    }
}

class BuildCarMain extends Component {

    constructor(props){
        super(props);
    }

    state = {
        isNavClicked: "",
        hrefLink: "#carDisplay1",
        tabNameList: ["외관", "실내", "패키지", "옵션", "액세서리", "요약"],
        tabName: ""
    }

    navMoveHandler = (e) => {

            console.log(e.target.name);

            this.setState({
                tabName: e.target.name,
                isNavClicked: "clicked"
            });
    }

    mouseLeaveHandler = (e) => {

        e.preventDefault();

        this.setState({
            isNavClicked: "",
            tabName: this.state.tabName
        });
    }

    render() {

        const {tabNameList} = this.state;

        return (
            <div className="BuildCarMain">
                <Nav />

                <section className="BuildCarContent">
                <nav className="topNav">
                    <ul className="tabList">
                        <li name="tabId" onMouseOut={this.mouseLeaveHandler}>
                            {tabNameList.map(item => {
                                return(
                                    <TabItems hrefLink={this.state.hrefLink} isClickedName={this.state.tabName} name={item} className={this.state.isNavClicked} tabName={item} onClick={this.navMoveHandler}/>
                                )
                            })}
                        </li>
                    </ul>
                </nav>

                <section className="mainView">
                     <CarSection />
                     <CarSummary />
                </section>
                </section>

            </div>
        )
    }
}

export default BuildCarMain;
