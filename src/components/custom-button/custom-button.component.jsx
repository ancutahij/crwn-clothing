import "./custom-button.styles.scss";
import React from "react";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="customer-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
