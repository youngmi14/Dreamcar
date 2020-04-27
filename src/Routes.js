import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import BuildCarMain from "./pages/BuildCarMain/BuildCarMain";
import MakeMyCar from "./pages/MakeMyCar/MakeMyCar";
import Choosecar from "./pages/ChooseCar/Choosecar";
<<<<<<< HEAD
import DealerLocator from "./pages/DealerLocator/DealerLocator";
=======
import Siseon from "./pages/Siseon/Siseon";
>>>>>>> master

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
          <Route exact path="/makemycar" component={MakeMyCar} />
          <Route exact path="/choosecar" component={Choosecar} />
<<<<<<< HEAD
          <Route exact path="/dealerlocator" component={DealerLocator} />
=======
          <Route exact path="/siseon" component={Siseon} />
>>>>>>> master
        </Switch>
      </Router>
    );
  }
}

export default Routes;
