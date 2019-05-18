import React, { Component } from "react";
import History from "../History/madHistroy";
import NEWButton from "../newButton";
import axios from "axios";

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
    this.completedStory = this.completedStory.bind(this);
    this.deleteFromHist = this.deleteFromHist.bind(this);
    this.editHist = this.editHist.bind(this);
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

  editHist(id, values) {
    axios
      .put(`/api/madliby/history/${id}?new_values=${values}`)
      .then(response => {
        console.log("edit response from server=", response.data);
        // this.setState({
        //   history: response.data
        // });
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
          edit={this.editHist}
          values={this.props.values}
        />
      </div>
    );
  }
}

export default Paragraph;
