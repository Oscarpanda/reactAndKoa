import React from "react"
import FilterLink from "../containers/FilterLink"

const Footer = (props) => (
  <p>
    Show:{" "}
    <FilterLink filter="SHOW_ALL" name={props.name}>All</FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE" name={props.name}>Active</FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED" name={props.name}>Completed</FilterLink>

  </p>

);
export default Footer;