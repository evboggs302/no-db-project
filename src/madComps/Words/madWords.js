import React, { Component } from "react";
import axios from "axios";
import Paragraph from "../Paragraph/madPara";
// import "./madWords.css";

class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
      final: []
    };
  }

  submit() {
    let finalStory = [];
    let { temp } = this.props;
    let { inputs } = this.state;
    for (let i = 0; i < inputs.length; i++) {
      finalStory.push(temp[i], inputs[i]);
    }
    if (temp.length <= 2) {
      finalStory.push(temp[temp.length]);
    } else {
      finalStory.push(temp[temp.length - 2]);
    }

    console.log(finalStory);
    this.setState({
      final: finalStory.join(" ")
    });
    // axios.post("/api/madliby", this.state.inputs).then(response => {});
  }

  changeHandler(event, index) {
    let { inputs } = this.state;
    inputs[index] = [event.target.value];
    this.setState({
      inputs: inputs
    });
  }

  render() {
    let { req } = this.props;
    let arr = req;
    console.log(arr);
    let mappedInputs =
      arr && arr.length
        ? arr.map((element, index) => {
            console.log(element);
            return (
              <div key={index}>
                <input
                  placeholder={element}
                  onChange={event => this.changeHandler(event, index)}
                />
              </div>
            );
          })
        : [];
    let { final } = this.state;

    return (
      <div>
        Words, Bruh. WORDS!
        {mappedInputs}
        <button onClick={() => this.submit()}>Submit</button>
        <Paragraph story={final} title={this.props.title} />
      </div>
    );
  }
}

export default Words;
