import React from "react";
import "./up.css";

const UpButton = props => {
  return (
    <div>
      <button className="dopeButton" onClick={() => props.moveUp(props.id)}>
        DOPE!
      </button>
    </div>
  );
};

export default UpButton;
