import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/home/home";
import nav from "./components/nav/nav";
import start from "./components/start/start";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
function App() {
  return (
    <div className="App">
      <Route path="/home" component={nav}></Route>
      <Switch>
        <Route exact path="/" component={start}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
