import React from "react";
import "./down.css";
const DownButton = props => {
  return (
    <div>
      <button className="dumbButton" onClick={() => props.moveDown(props.id)}>
        This Is Dumb...
      </button>
    </div>
  );
};

export default DownButton;
