import React, { Component } from "react";
import HasChildren from './HasChildren'

export default class Parent extends Component {
	render() {
		return (
      <HasChildren>
        { (test) => {
          return (
            <div>{test}
              <div>Hello</div>
            </div>
          )
        }}
      </HasChildren>
    )
	}
}
