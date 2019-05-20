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
      axios
        .put("/api/madliby", response.data)
        .then(response => {
          this.setState({
            template: response.data.template,
            variables: response.data.variables,
            title: response.data.title
          });
        })
        .catch(error =>
          console.log(`api ain't working... start tellin dad jokes`)
        );
    });
  }

  render() {
    const { variables } = this.state;
    const { template } = this.state;
    const { title } = this.state;

    return (
      <div className="body">
        <header className="head">
          <h1>IT'S ABOUT TO GET REAL</h1>
        </header>
        <div className="theRest">
          <Words temp={template} req={variables} title={title} />
        </div>
      </div>
    );
  }
}

export default App;
