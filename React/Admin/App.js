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
    // get call will be in binList, in the component did mount to display bins in binlist. 
    // do post call here to store bin name in the database. 
    // manually pushing into active bins to test for rendering. 
    // get the bin name in an object

    const pushIntoBin = this.state.activeBins;
    const { binName } = this.state;
    const binData = { binName };
    pushIntoBin.push(binData);
    this.setState({ activeBins: pushIntoBin })
      
    // reset the binName to '';
    this.setState({ binName : '' })
  }

  handleChange(e) {
    // update state with the name user has placed in. 
    this.setState({ binName: e.target.value })
  }

  deleteBin(id) {

    function inner(e) {
      // create a copy of the array to pass into set state, don't mutate directly. 
      const activeBins = this.state.activeBins.slice(); 
      // splice the active Bins array
      activeBins.splice(id, 1);
      // set state
      this.setState({ activeBins });
      // remove from the database 
      console.log('inside of inner function ' , id)
    }
    return inner.bind(this);
  }

  redirectToBinPage(e) {
    
  }

  componentDidMount() {
    
  }
  

  render() {
    return (
      <div>
        <Bincreator 
          binName={this.state.binName} 
          handleChange={this.handleChange}
          createBin={this.createBin} />
        <Binlist 
          deleteBin={this.deleteBin}
          bins={this.state.activeBins}
          redirectToBinPage={this.redirectToBinPage} />
      </div>
    )
  }
}

export default App;