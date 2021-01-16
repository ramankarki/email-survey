import React from "react";
import StripeCover from "./StripeCover";
import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <section style={{ width: "90%", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem" }}>Dashboard</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <p style={{ fontSize: "1.3rem", color: "#39bdc8" }}>
          Credits: {props.auth ? props.auth.user.credits : 0}
        </p>
        <StripeCover />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Dashboard);
