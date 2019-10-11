import React, { Component } from "react";
import "./App.css";
import CitizenServices from "../../services/brastlewark.services";

import Gnomes from '../gnomes/gnomeCitizens'

class App extends Component {
  constructor() {
    super();
    this.state = {brastlewark:''};
    this.cityService = new CitizenServices();
  }

  componentDidMount() {
    this.cityService.getCitizens()
        .then(response => this.setState({ brastlewark: response.data }))
        .catch(err => console.log(`There was an error: ${err}`))
  }

  render() {
    return(
     <>
     <h1>Gnomes City Census</h1>
     <Gnomes/>
     </>
    )
  }
}


export default App;
