import React from "react";
import axios from "axios";

const NEWButton = props => {
  function getNewStory() {
    axios.get("http://madlibz.herokuapp.com/api/random").then(response => {
      axios.put("/api/madliby", response.data).then(response => {
        console.log(response.data);
      });
    });
  }
  return (
    <div>
      <button onClick={() => getNewStory()}>New Story</button>
    </div>
  );
};

export default NEWButton;
