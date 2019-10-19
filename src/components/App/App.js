import React, { Component } from "react";
import "./App.css";
import CitizenServices from "../../services/brastlewark.services";
import { Switch, Route } from "react-router-dom";


import Gnomes from "../Gnomes/gnomeCitizens";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cityService = new CitizenServices();
  }

  componentDidMount = () => this.updateState();

  updateState = () => {
    this.cityService
      .getCitizens()
      .then(response => {
        this.setState({ citizens: response.data.Brastlewark });
      })
      .catch(err => console.log(`There was an error: ${err}`));
  };

  render() {
    return (
      <>
      <header>
        <nav>
          <h1>Gnomes City Census</h1>
        </nav>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Gnomes citizens={this.state.citizens} />}
          />
        </Switch>
     
      </>
    )
  }
}

export default App;
