import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Main from "./Main";
import BuildCarMain from "./pages/BuildCarMain/BuildCarMain";

class Routes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/buildcar" component={BuildCarMain} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;