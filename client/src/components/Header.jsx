import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  loginState() {
    if (this.props.auth) {
      if (this.props.auth.statusCode === 200)
        return (
          <li>
            <a
              href="/auth/google/logout"
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                color: "#ffa1bb",
              }}
            >
              Logout
              <i
                className="fab fa-google"
                style={{ color: "#ffa1bb", marginLeft: ".5rem" }}
              />
            </a>
          </li>
        );
      return (
        <li>
          <a
            href="/auth/google"
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            Login with
            <i
              className="fab fa-google"
              style={{ color: "#5BF59A", marginLeft: ".5rem" }}
            />
          </a>
        </li>
      );
    }
    return "";
  }

  render() {
    return (
      <nav style={{ backgroundColor: "#3d6cb9" }}>
        <div className="nav-wrapper" style={{ width: "90%", margin: "auto" }}>
          <Link to="/" className="left brand-logo">
            <picture style={{ display: "flex", alignItems: "center" }}>
              <img src="favicon.svg" alt="logo" width="40px" /> Email Survey
            </picture>
          </Link>
          <ul className="right">{this.loginState()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
