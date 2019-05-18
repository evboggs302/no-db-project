import React, { Component } from "react";
import Paragraph from "../Paragraph/madPara";
// import NEWButton from "../newButton";
// import axios from "axios";
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
    console.log("this is the final story when clicked =", finalStory);
    this.setState({
      final: finalStory
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
        {/* <NEWButton
          temp={this.props.template}
          req={this.props.variables}
          title={this.props.title}
        /> */}
        <Paragraph
          storyArr={final}
          story={final.join(" ")}
          title={this.props.title}
          values={mappedInputs}
        />
      </div>
    );
  }
}

export default Words;
