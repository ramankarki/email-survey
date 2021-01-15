import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  getStartedButtonStyle = {
    display: "block",
    maxWidth: "max-content",
    margin: " 3rem auto 0",
    padding: "1rem 2.5rem",
    borderRadius: "100rem",
    fontSize: "1rem",
    fontWeight: "500",
    border: "none",
    backgroundColor: "#39bdc8",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    textDecoration: "none",
  };

  getStartedButton() {
    if (this.props.auth) {
      if (this.props.auth.statusCode === 200)
        return (
          <Link to="/surveys" style={this.getStartedButtonStyle}>
            Get started
          </Link>
        );
      return (
        <a href="/auth/google" style={this.getStartedButtonStyle}>
          Get started
        </a>
      );
    }
    return "";
  }

  render() {
    return (
      <section>
        <picture
          style={{ width: "80%", maxWidth: "300px", margin: "2rem auto" }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src="survey-illustration.svg"
            alt="survey-illustration"
          />
        </picture>
        <p
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "1.4rem",
            fontWeight: "500",
            color: "#482ff7",
            textAlign: "center",
            width: "75%",
            lineHeight: "2.5rem",
          }}
        >
          Start your next survey by sending{" "}
          <span style={{ color: "#39bdc8", textDecoration: "underline" }}>
            email
          </span>{" "}
          to your clients
          <br /> and get{" "}
          <span style={{ color: "#39bdc8", textDecoration: "underline" }}>
            feedback
          </span>{" "}
          to improve your business.
        </p>
        {this.getStartedButton()}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Landing);
