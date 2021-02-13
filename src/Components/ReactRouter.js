import React from "react";
import { Router, Route, browserHistory } from "react-router-dom";
import MainPage from "./mainPage";
import Places from "./Places";

const ReactRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route exact path={"/"} component={MainPage} />
      <Route exact path={"/places"} component={Places} />
    </Router>
  );
};

export default ReactRouter;
