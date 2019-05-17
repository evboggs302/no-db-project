import React from "react";
import History from "../History/madHistroy";
// import axios from "axios";

const Paragraph = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <span>{props.story}</span>
      <button>Save</button>
      <button>!!!! NEW !!!!</button>
      <br />
      <History story={props.story} title={props.title} />
    </div>
  );
};

export default Paragraph;
