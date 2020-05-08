import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item" style={{ fontWeight: "bolder" }}>
        Streamy
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
