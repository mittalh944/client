import React from "react";
import "./Navigationbar.css";
import SearchIcon from "@material-ui/icons/Search";

function Navigationbar() {
  return (
    <div className="navigationBar">
      <div className="left">
        <p>Live</p>
      </div>

      <div className="center">
        <input type="text" placeholder="Search Live" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="right">
        <a className="logIn" href="http://localhost:3000/login">
          Login
        </a>

        <a href="http://localhost:3000/register" id="signUp">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Navigationbar;
