import React, { Component } from "react";


export default class HasChildren extends Component {
  state = {
    test: 'this is s test to show props.children working'
  }
	render() {
		return this.prop.children(this.state.test);
	}
}
