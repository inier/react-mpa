import React from "react";
import MainNav from "../MainNav";
import "../../assets/css/common.pcss";
import "./index.pcss";

const Header = ({ active }) => (
  <div className="header">
    <div className="con-wrap">
      <i className="logo" />
      <span className="title">{active}</span>
      <MainNav active={active} />
    </div>
  </div>
);

export default Header;
