import React, { Component } from "react";
// import axios from "axios";
// import "./madWords.css";

class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.createNewInput = this.createNewInput.bind(this);
  }

  //   createNewInput(arr) {
  //     console.log(arr);
  //     return arr.map(element => {
  //       return <input placeholder={element} />;
  //     });
  //     // return arr;
  //   }

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
                <input placeholder={element} />
              </div>
            );
          })
        : [];
    return (
      <div>
        Words, man. WORDS
        {mappedInputs}
      </div>
    );
  }
}

export default Words;
