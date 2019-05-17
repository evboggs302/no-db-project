import React from "react";
import NEWButton from "../newButton";
// import axios from "axios";

const History = props => {
  console.log(props);

  return (
    <div>
      <br />
      <h2>
        History
        <NEWButton action={"insert function to get new story"} />
      </h2>
      <div>{props.saved}</div>
    </div>
  );
};
export default History;
