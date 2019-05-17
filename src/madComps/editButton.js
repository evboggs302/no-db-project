import React from "react";
import axios from "axios";

const EDITButton = props => {
  return (
    <div>
      <button onClick={() => props.edit(props.id)}>Edit</button>
    </div>
  );
};

export default EDITButton;
