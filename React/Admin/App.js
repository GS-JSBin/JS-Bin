import React, { Component } from "react";
import Bincreator from './Bincreator.js';
import Binlist from './Binlist.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBins: [],
      binName: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.createBin = this.createBin.bind(this);

  }

  createBin() {
    // do post call here to store bin name in the database. 
    // get call will be in binList, in the component did mount to display bins in binlist. 
  }

  handleChange(e) {
    // update state with the value user has placed in. 
    this.setState({ binName: e.target.value })
  }

  render() {
    return (
      <div>
        <Bincreator binName={this.state.binName} handleChange={this.handleChange}/>
        <Binlist />
      </div>
    )
  }
}

export default App;