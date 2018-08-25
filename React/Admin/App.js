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
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.createBin = this.createBin.bind(this);
    this.deleteBin = this.deleteBin.bind(this);
    this.fetchBinsAndUpdatePage = this.fetchBinsAndUpdatePage.bind(this);
    this.typePassword = this.typePassword.bind(this);
  }
  
  handleChange(e) {
    this.setState({ binName: e.target.value })
  }

  typePassword(e) {
    this.setState({ password: e.target.value })
  }

  createBin(e) {
    const binName = this.state.binName.trim();
    
    if (this.state.binName && this.state.password) {
      const password = this.state.password.trim();
      fetch('http://localhost:3000/admin/addBin', {
        method: 'POST',
        body: JSON.stringify({ name: binName, password }),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(response => {/* console.log('fetched response ', response); */})
      .catch(err => console.log('error ', err));
    } else {
      fetch('http://localhost:3000/admin/addBin', {
        method: 'POST',
        body: JSON.stringify({ name: binName }),
        headers: {
          "Content-Type": "application/json"
        },
      }).then(response => {/* console.log('fetched response ', response); */})
      .catch(err => console.log('error ', err));
    }
    
    // reset input values. 
    this.setState({ binName : '', password: '' })
    this.fetchBinsAndUpdatePage();
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

  fetchBinsAndUpdatePage() {
    fetch('http://localhost:3000/admin/allBins')
    .then((res => res.json()))
    .then(res => this.setState({ activeBins: res}))
    .catch(err => console.log('Error grabbing bins ', err))
  }
  
  redirectToBinPage(e) {
    window.location.href = 'http://localhost:3000/bin/' + e.target.id;
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
          createBin={this.createBin} 
          password={this.state.password}
          typePassword={this.typePassword} />
        <Binlist 
          deleteBin={this.deleteBin}
          bins={this.state.activeBins}
          redirectToBinPage={this.redirectToBinPage} />
      </div>
    )
  }
}

export default App;