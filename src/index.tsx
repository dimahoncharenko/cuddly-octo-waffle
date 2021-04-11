import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import Header from "./components/Header";
import Container from "./components/Container";
import IndexPage from "./pages/IndexPage";
import Preview from "./pages/Preview";
import Stages from "./pages/Stages";
import Competence from "./pages/Competence";
import Benefits from "./pages/Benefits";
import Shortcomings from "./pages/Shortcomings";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Container>
        <Switch>
          <Route path="/preview" component={Preview}/>
          <Route path="/stages" component={Stages}/>
          <Route path="/it-competence" component={Competence}/>
          <Route path="/benefits" component={Benefits}/>
          <Route path="/shortcomings" component={Shortcomings}/>
          <Route path="/" component={IndexPage}/>
        </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);