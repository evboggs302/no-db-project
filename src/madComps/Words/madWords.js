import React, { Component } from "react";
import Paragraph from "../Paragraph/madPara";
import "./madWords.css";

class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
      final: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submit = this.submit.bind(this);
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
    this.setState({
      final: finalStory.join(" ")
    });
  }

  changeHandler(event, index) {
    let { inputs } = this.state;
    inputs[index] = [event.target.value];
    this.setState({
      inputs: inputs
    });
  }

  render() {
    let { final } = this.state;
    let { req } = this.props;
    let arr = req;
    let mappedInputs =
      arr && arr.length
        ? arr.map((element, index) => {
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

    return (
      <div>
        Words, Bruh. WORDS!
        {mappedInputs}
        <button onClick={() => this.submit()}>Create Story</button>
        <Paragraph
          story={final}
          title={this.props.title}
          values={this.state.inputs}
        />
      </div>
    );
  }
}

export default Words;
