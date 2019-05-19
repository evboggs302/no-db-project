import React, { Component } from "react";
import History from "../History/madHistroy";
import NEWButton from "../Buttons/newButton";
import axios from "axios";

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
    this.completedStory = this.completedStory.bind(this);
    this.deleteFromHist = this.deleteFromHist.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
  }

  moveUp(id) {
    axios.put(`/api/madliby/history/dope/${id}`).then(response => {
      console.log("edit response from server=", response.data);
      this.setState({
        history: response.data
      });
    });
  }

  moveDown(id) {
    axios.put(`/api/madliby/history/dumb/${id}`).then(response => {
      console.log("edit response from server=", response.data);
      this.setState({
        history: response.data
      });
    });
  }

  completedStory() {
    let { story } = this.props;
    let { id } = this.state;
    let body = { string: story, id: id };
    axios.post("/api/madliby/history", body).then(response => {
      console.log("reponse after posting=", response.data);
      this.setState({
        history: response.data
      });
    });
  }

  deleteFromHist(id) {
    axios.delete(`/api/madliby/history/${id}`).then(response => {
      this.setState({
        history: response.data
      });
    });
  }

  render() {
    // console.log("this is the values being sent to server", this.props.values);
    return (
      <div>
        <h3>{this.props.title}</h3>
        <span>{this.props.story}</span>
        <div>
          <button onClick={() => this.completedStory()}>Save Story</button>
        </div>
        <NEWButton />
        <br />
        <History
          saved={this.state.history}
          title={this.props.title}
          delete={this.deleteFromHist}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
        />
      </div>
    );
  }
}

export default Paragraph;
