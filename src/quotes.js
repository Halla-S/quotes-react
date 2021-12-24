import React from "react";
const Quotes = (props) => {
  return (
    <ul>
      <li>
        <h4>{props.quote}</h4>
        <h5>"{props.author}"</h5>
      </li>
    </ul>
  );
};
export default Quotes;
