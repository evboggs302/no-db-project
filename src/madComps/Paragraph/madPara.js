import React from "react";
import History from "../History/madHistroy";
import NEWButton from "../newButton";
// import axios from "axios";

const Paragraph = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <span>{props.story}</span>
      <button>Save Story</button>
      <NEWButton action={"insert function to get new story"} />
      <br />
      <History story={props.story} title={props.title} />
    </div>
  );
};

export default Paragraph;
