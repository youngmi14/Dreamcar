import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import BuildCarMain from "./pages/BuildCarMain/BuildCarMain";
import MakeMyCar from "./pages/MakeMyCar/MakeMyCar";
import Choosecar from "./pages/ChooseCar/Choosecar";

import Siseon from "./pages/Siseon/Siseon";
import Sum from "./pages/Sum/Sum";
import Thankyou from "./pages/BuildCarMain/Thankyou";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/buildcar" component={BuildCarMain} />
          <Route exact path="/makemycar" component={MakeMyCar} />
          <Route exact path="/choosecar" component={Choosecar} />
          <Route exact path="/siseon" component={Siseon} />
          <Route exact path="/sum" component={Sum} />
          <Route exact path="/thankyou" component={Thankyou} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
