import React, { Component } from "react";

class StarWars extends Component {
	render() {
    const { name, height, mass, eye_color } = this.props.data;
		return (
			<div className="star-wars-char">
				<span>name: {name} </span>
				<span>height: {height} </span>
				<span>mass: {mass} </span>
				<span>eye_color: {eye_color} </span>
			</div>
		);
	}
}
export default StarWars;
