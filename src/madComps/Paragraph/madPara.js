import React, { Component } from "react";
import axios from "axios";
import History from "../History/madHistroy";

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: []
    };
  }

  render() {
    return (
      <div>
        <span>{this.props.story}</span>

        {/* <History  temp={this.props.temp}
          title={this.props.title}/> */}
      </div>
    );
  }
}
export default Paragraph;
