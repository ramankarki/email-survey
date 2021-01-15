import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  loginStyle = {
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    color: "#ffa1bb",
    textDecoration: "none",
  };

  loginState() {
    if (this.props.auth) {
      if (this.props.auth.statusCode === 200)
        return (
          <li>
            <a href="/auth/google/logout" style={this.loginStyle}>
              Logout
              <i
                className="fab fa-google"
                style={{
                  color: "#ffa1bb",
                  marginLeft: ".5rem",
                  fontSize: "1.3rem",
                }}
              />
            </a>
          </li>
        );
      return (
        <li>
          <a href="/auth/google" style={{ ...this.loginStyle, color: "white" }}>
            Login with
            <i
              className="fab fa-google"
              style={{
                color: "#5BF59A",
                marginLeft: ".5rem",
                fontSize: "1.3rem",
              }}
            />
          </a>
        </li>
      );
    }
    return "";
  }

  render() {
    return (
      <nav style={{ backgroundColor: "#482ff7" }}>
        <div
          className="nav-wrapper"
          style={{
            width: "95%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".5rem 0",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <picture
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.3rem",
                fontWeight: "500",
                color: "white",
              }}
            >
              <img src="favicon.svg" alt="logo" width="30px" /> Email Survey
            </picture>
          </Link>
          <ul style={{ listStyle: "none" }}>{this.loginState()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
