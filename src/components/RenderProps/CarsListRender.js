import React, { Component } from "react";

class CarsListRender extends Component {
	render() {
    const { make, model, year, image, mileage } = this.props.data
		return (
      <div className="car">
        <h1>{make}</h1>
        <h2>{model}</h2>
        <div>{year}</div>
        <img src={image} alt=""/>
        <div>Mileage: {mileage}</div>
      </div>
    )
	}
}

export default CarsListRender;
