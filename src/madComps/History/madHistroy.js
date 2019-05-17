import React from "react";
import NEWButton from "../newButton";
// import axios from "axios";

const History = props => {
  console.log(props);

  return (
    <div>
      <br />
      <h2>History</h2>
      <div>
        {props.saved}
        <button>!!!!! DELETE !!!!!</button>
      </div>
      <NEWButton action={"insert function to get new story"} />
    </div>
  );
};
export default History;
