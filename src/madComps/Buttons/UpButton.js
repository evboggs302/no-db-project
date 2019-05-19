import React from "react";

const UpButton = props => {
  return (
    <div className="dopeButton">
      <button onClick={() => props.moveUp(props.id)}>DOPE!</button>
    </div>
  );
};

export default UpButton;
