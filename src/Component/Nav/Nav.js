import React, { Component } from "react";
import "./Nav.css";
//  import logo from "./../../images/logo.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
         <img src="/images/chat4.png" width="500px"/> 
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
    );
  }
}