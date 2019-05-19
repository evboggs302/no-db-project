import React from "react";

const UpButton = props => {
  return (
    <div>
      <button onClick={() => props.moveUp(props.id)}>DOPE!</button>
    </div>
  );
};

export default UpButton;
