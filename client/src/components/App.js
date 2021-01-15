import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveysNew from "./SurveysNew";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <section>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveysNew} />
        </BrowserRouter>
      </section>
    );
  }
}

export default App;
