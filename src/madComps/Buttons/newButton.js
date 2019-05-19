import React from "react";
import axios from "axios";
import "./new.css";

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
      <button className="newStoryButton" onClick={() => getNewStory()}>
        New Story
      </button>
    </div>
  );
};

export default NEWButton;
