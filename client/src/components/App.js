import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUser } from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveysNew from "./SurveysNew";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <section>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route exact path="/surveys/new" component={SurveysNew} />
          <p
            style={{
              textAlign: "center",
              margin: "2rem auto",
              marginTop: "3rem",
              width: "90%",
              fontSize: ".8rem",
            }}
          >
            full stack app coded by{" "}
            <a
              href="https://github.com/ramankarki"
              target="_blank"
              rel="noreferrer"
            >
              Raman karki
            </a>
          </p>
        </BrowserRouter>
      </section>
    );
  }
}

export default connect(null, { fetchUser })(App);
