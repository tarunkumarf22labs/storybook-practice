import PropTypes from "prop-types";
import React from "react";
import { options } from "./constants";

export const Card = ({ children = "I am learning", color = "primary", size = "sm" }) => {
  return <div> {children} </div>;
};
Card.prototype = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.size),
};
export default Card

