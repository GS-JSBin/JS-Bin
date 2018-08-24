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
    this.deleteBin = this.deleteBin.bind(this);
  }

  createBin(e) {
    // do post call here to store bin name in the database. 
    // get call will be in binList, in the component did mount to display bins in binlist. 

    // below was for testing purposes. 
      // this.setState({ activeBins: this.state.activeBins.push(this.state.binName) })
      // console.log('inside of createBin ',this.state.activeBins)
      
    // reset the binName to '';
    this.setState({ binName : '' })
  }

  handleChange(e) {
    // update state with the value user has placed in. 
    this.setState({ binName: e.target.value })
    
    console.log('inside of handleChange ', this.state.binName);
  }

  deleteBin(e) {
    console.log(e.target.key)
    // create a copy of the array to pass into set state, don't mutate directly. 
    const activeBins = this.state.activeBins.slice(); 
    // splice the active Bins array
    activeBins.splice(e.target.key, 1);
    // set state
    this.setState({ activeBins });
    // remove from the database 

  }

  redirectToBinPage(e) {
    
  }

  componentDidMount() {
    // fetch Data
  }
  

  render() {
    return (
      <div>
        <Bincreator 
          binName={this.state.binName} 
          handleChange={this.handleChange}
          createBin={this.createBin} />
        <Binlist 
          binName={this.state.binName} 
          deleteBin={this.deleteBin}
          bins={this.state.activeBins}
          redirectToBinPage={this.redirectToBinPage} />
      </div>
    )
  }
}

export default App;