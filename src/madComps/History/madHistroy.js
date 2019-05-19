import React from "react";
import UpButton from "../Buttons/upButton";
import DownButton from "../Buttons/downButton";
import DELETEButton from "../Buttons/deleteButton";
import "./madHistory.css";

const History = props => {
  let mappedHist = props.saved.map((e, index) => {
    return (
      <div key={index}>
        <p>{e.string}</p>
        <UpButton id={index} moveUp={props.moveUp} />
        <DownButton id={index} moveDown={props.moveDown} />
        <DELETEButton id={index} delete={props.delete} />
      </div>
    );
  });

  return (
    <div className="history">
      <br />
      <h2 className="title">History</h2>
      <div className="historyItems">{mappedHist}</div>
    </div>
  );
};
export default History;
