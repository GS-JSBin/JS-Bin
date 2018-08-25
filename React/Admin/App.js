import React, { Component } from "react";
import Bincreator from './Bincreator.js';
import Binlist from './Binlist.js';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBins: {},
      binName: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.createBin = this.createBin.bind(this);
    this.deleteBin = this.deleteBin.bind(this);
    this.fetchBinsAndUpdatePage = this.fetchBinsAndUpdatePage.bind(this);
  }

  fetchBinsAndUpdatePage() {
    fetch('http://localhost:3000/admin/allBins')
    .then((res => res.json()))
    .then(res => this.setState({ activeBins: res}))
    .catch(err => console.log('Error grabbing bins ', err))
  }

  createBin(e) {
    const { binName } = this.state;
  
    fetch('http://localhost:3000/admin/addBin', {
      method: 'POST',
      body: JSON.stringify({name: binName}),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response => {
      // console.log('fetched response ', response);
    }).catch(err => {
      console.log('error ', err);
    })

    // reset input bar value. 
    this.setState({ binName : '' })
    this.fetchBinsAndUpdatePage();
  }

  handleChange(e) {
    // update state with the name user has placed in. 
    this.setState({ binName: e.target.value })
  }

  deleteBin(e) {
    fetch('http://localhost:3000/admin/deleteBin', {
      method: 'delete',
      body: JSON.stringify({ name: e.target.id }),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    this.fetchBinsAndUpdatePage();
  }

  redirectToBinPage(e) {
    console.log(e.target);
  }

  componentDidMount() {
    this.fetchBinsAndUpdatePage();
  }
  

  render() {
    return (
      <div>
        <div class="admin_title"> Admin </div>
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