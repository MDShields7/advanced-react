import React, {Component} from 'react';
import axios from 'axios';

function myHOC(Component, url){
  return class extends Component {
    constructor (props) {
      super(props);
      this.state = {
        data: null
      }
    }
    getData = () => {
      axios.get(url).then((stuff) => {
        this.setState({
          data: stuff.data
        })
      }).catch(err => console.log(err))
    }
    updateUserId = (id) => {
      this.setState({
        data: { ...this.state.data, id}
      })
    }
    render () {
      return (
        <>
          {
            this.state.data ?
            <Component {...this.props} data={this.state.data} updateUserId={this.updateUserId}/>
            : this.getData()
          }
        </>
      )
    }
  }
}
export default myHOC;