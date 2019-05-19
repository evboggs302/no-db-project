import React from "react";

const DownButton = props => {
  return (
    <div>
      <button onClick={() => props.moveDown(props.id)}>This Is Dumb...</button>
    </div>
  );
};

export default DownButton;
