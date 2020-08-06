import React, { Component } from "react";

class StarWars extends Component {
  
  render() {
    const characterList = this.props.characters.map(character => {
      return (
        <div className='star-wars-char'>
          <span> Name: {character.name} </span>
          <span> Height: {character.height} </span>
          <span> Mass: {character.mass} </span>
        </div>
      )
    })
		return <div>{characterList}</div>;
	}
}
export default StarWars;
