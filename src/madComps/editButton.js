import React from "react";
import axios from "axios";

const EDITButton = props => {
  function editStory() {
    // axios.put("/api/madliby/history/:id", wjrbveovberouvj).then(response => {
    //
    // });
  }
  return (
    <div>
      <button onClick={() => editStory()}>Edit</button>
    </div>
  );
};

export default EDITButton;
