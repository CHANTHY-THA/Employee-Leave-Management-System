import React from "react";
import "./header-component.css";
const Header = (props) => {
  const {content} = props;
  return (
      <div className = "header-container"><h5>{content}</h5></div>
  )
}
export default Header;
