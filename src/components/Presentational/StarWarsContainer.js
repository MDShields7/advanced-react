import React, { Component } from "react";
import axios from 'axios';
import StarWarsDisplay from './StarWarsDisplay'

export default class CharacterListContainer extends Component {
  constructor (props){
    super(props)
    this.state = {
      characters: [],
    }
  }
  componentDidMount = () => {
    axios.get(`https://swapi.co/api/people`).then ( characters => {
      this.setState({
        characters: characters.data.results
      })
    })
  }
	render() {
		return <StarWarsDisplay characters={this.state.characters}/>
	}
}
