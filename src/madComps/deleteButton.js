import React from "react";
import axios from "axios";

const DELETEButton = props => {
  function deleteStory() {
    // axios.delete("/api/madliby/history:id").then(response => {
    //
    // });
  }
  return (
    <div>
      <button onClick={() => deleteStory()}>Delete</button>
    </div>
  );
};

export default DELETEButton;
