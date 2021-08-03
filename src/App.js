import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Start from "./components/Start/Start";
import Menu from "./components/Menu/Menu";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Form from "./components/Form/Form";
import Dog from "./components/Dog/Dog";
const URL = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <Route path={URL + "/home"} component={Nav}></Route>
      <Route exact path="/home" component={Menu}></Route>
      <Switch>
        <Route exact path={URL + "/"} component={Start}></Route>
        <Route exact path={URL + "/home"} component={Home}></Route>
        <Route path={URL + "/home/newdog"} component={Form}></Route>
        <Route exact path={URL + "/home/:id"} component={Dog}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
