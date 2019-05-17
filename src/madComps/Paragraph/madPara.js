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
  }

  completedStory() {
    let { story } = this.props;
    let { id } = this.state;
    let body = { string: story, id: id };
    console.log(body);
    axios.post("/api/madliby/history", body).then(response => {
      console.log("reponse after posting", response.data);
      this.setState({
        history: response.data
      });
    });
  }

  deleteFromHist(id) {
    axios.delete(`/api/madliby/history/${id}`).then(response => {
      console.log(response.data);
      this.setState({
        history: response.data
      });
    });
  }

  editHist(id) {
    axios.put(`/api/madliby/history/${id}`).then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <span>{this.props.story}</span>
        <div>
          <button onClick={() => this.completedStory()}>Save Story</button>
        </div>
        <NEWButton action={"insert function to get new story"} />
        <br />
        <History
          saved={this.state.history}
          title={this.props.title}
          delete={this.deleteFromHist}
          edit={this.editHist}
        />
      </div>
    );
  }
}

export default Paragraph;
