import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variables: [],
      template: [],
      title: ""
    };
    this.getTemplateFromApi = this.getTemplateFromApi.bind(this);
  }

  componentDidMount() {
    this.getTemplateFromApi();
  }

  getTemplateFromApi() {
    axios.get("http://madlibz.herokuapp.com/api/random").then(response => {
      console.log(response);
      this.setState({
        template: response.data.value,
        variables: response.data.blanks,
        title: response.data.title
      });
    });
  }

  render() {
    const { variables, template, title } = this.state;

    console.log(variables);
    console.log(template);
    return (
      <div>
        <h1>{">"}ITS ABOUT TO GO DOWN</h1>
        <div>{variables}</div>
        <br />
        <div>{template}</div>
        <br />
        <div>
          {">"}
          History
          <div>{title}</div>
        </div>
      </div>
    );
  }
}

export default App;
