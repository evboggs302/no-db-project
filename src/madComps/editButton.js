import React from "react";

const EDITButton = props => {
  return (
    <div>
      <button onClick={() => props.edit(props.id)}>Edit</button>
    </div>
  );
};

export default EDITButton;
