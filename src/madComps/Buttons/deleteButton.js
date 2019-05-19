import React from "react";
import "./delete.css";

const DELETEButton = props => {
  return (
    <div className="deleteButton">
      <button onClick={() => props.delete(props.id)}>Delete</button>
    </div>
  );
};

export default DELETEButton;
