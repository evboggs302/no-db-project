import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Words from "./madComps/Words/madWords";
// import Paragraph from "./madComps/Paragraph/madPara";
// import History from "./madComps/History/madHistroy";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variables: [],
      template: [],
      title: ""
    };
    this.getDataFromApi = this.getDataFromApi.bind(this);
    // this.postDataToBackend = this.postDataToBackend.bind(this);
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    axios.get("http://madlibz.herokuapp.com/api/random").then(response => {
      this.setState({
        template: response.data.value,
        variables: response.data.blanks,
        title: response.data.title
      });
      axios.post("/api/madliby", response.data).then(response => {
        this.setState({
          template: response.data.templete,
          variables: response.data.variables,
          title: response.data.title
        });
      });
    });
  }

  render() {
    const { variables } = this.state;
    // const { template } = this.state;
    // const { title } = this.state;

    console.log(variables);
    // console.log(template);
    return (
      <div>
        <h1>{">"}ITS ABOUT TO GO DOWN</h1>
        <Words req={variables} />
        <br />
        {/* <Paragraph temp={template} /> */}
        <br />
        {/* <History title={title} /> */}
      </div>
    );
  }
}

export default App;
