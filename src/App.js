import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Words from "./madComps/Words/madWords";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variables: [],
      template: [],
      title: ""
    };
    this.getDataFromApi = this.getDataFromApi.bind(this);
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    axios.get("http://madlibz.herokuapp.com/api/random").then(response => {
      console.log(response.data);
      axios.put("/api/madliby", response.data).then(response => {
        console.log(response.data);
        this.setState({
          template: response.data.template,
          variables: response.data.variables,
          title: response.data.title
        });
      });
    });
  }

  render() {
    const { variables } = this.state;
    const { template } = this.state;
    const { title } = this.state;

    return (
      <div>
        <h1>{">"}ITS ABOUT TO GO DOWN</h1>
        <br />
        <Words temp={template} req={variables} title={title} />
      </div>
    );
  }
}

export default App;
