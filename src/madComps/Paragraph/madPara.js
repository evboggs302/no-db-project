import React, { Component } from "react";
import History from "../History/madHistroy";
import NEWButton from "../newButton";
import axios from "axios";

// import axios from "axios";

class Paragraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
    this.completedStory = this.completedStory.bind(this);
  }

  completedStory() {
    let { story } = this.props;
    let body = { string: story };
    console.log(body);
    axios.post("/api/madliby/history", body).then(response => {
      console.log("reponse after posting", response.data);
      this.setState({
        history: response.data
      });
      console.log("this.state.history =", this.state.history);
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
          saved={this.state.history.map(e => {
            return <p>{e.string}</p>;
          })}
          title={this.props.title}
        />
      </div>
    );
  }
}

export default Paragraph;
