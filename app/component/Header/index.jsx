import React from "react";
import MainNav from "../MainNav";
import "../../public/css/common.pcss";

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
