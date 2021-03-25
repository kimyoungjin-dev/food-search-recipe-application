import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Detail from "Routes/Detail";
import Home from "Routes/Home";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
