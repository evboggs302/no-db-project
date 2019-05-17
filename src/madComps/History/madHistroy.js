import React from "react";
import NEWButton from "../newButton";
import EDITButton from "../editButton";
import DELETEButton from "../deleteButton";
// import axios from "axios";

const History = props => {
  console.log(props);
  let mappedHist = props.saved.map((e, index) => {
    return (
      <div key={index}>
        <p>{e.string}</p>
        <EDITButton id={index} />
        <DELETEButton id={index} delete={props.delete} />
      </div>
    );
  });

  return (
    <div>
      <br />
      <h2>
        History
        {/* <NEWButton action={"insert function to get new story"} /> */}
      </h2>
      <div>{mappedHist}</div>
    </div>
  );
};
export default History;
