import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Start from "./components/Start/Start";
import Menu from "./components/Menu/Menu";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Dog from "./components/Dog/Dog";
function App() {
  return (
    <div className="App">
      <Route path="/home" component={Nav}></Route>
      <Route exact path="/home" component={Menu}></Route>
      <Switch>
        <Route exact path="/" component={Start}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/home/newdog" component={Form}></Route>
        <Route exact path="/home/:id" component={Dog}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Switch>
      {/* <Route path="/home" component={Footer}></Route> */}
    </div>
  );
}

export default App;
