import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { handleToken } from "../actions";

class StripeCover extends React.Component {
  addCreditsButtonStyle = {
    display: "block",
    maxWidth: "max-content",
    padding: ".8rem 2rem",
    borderRadius: "1rem",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    outline: "none",
    fontSize: "1rem",
    fontWeight: "500",
    border: "none",
    backgroundColor: "#39bdc8",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    textDecoration: "none",
  };

  render() {
    return (
      <StripeCheckout
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey="pk_test_51IA68gBRySyCGrtLELJI9OvBvOixSzzdWxWmCxGQIyj4ayhjFzgHzOqZOVHDRHyfsQsSGMavRyGdCidv7r3HeOOH00d1prwmyC"
        name="Email Survey"
        description="Rs50 for 5 email credits"
        currency="INR"
        location="india"
      >
        <button className="btn" style={this.addCreditsButtonStyle}>
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handleToken })(StripeCover);
