import "./App.css";
import MainPage from "./Components/mainPage";
import Places from "./Components/Places";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/places/:id" component={Places} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
