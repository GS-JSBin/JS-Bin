import React, { Component } from "react";
import Bincreator from './Bincreator.js';
import Binlist from './Binlist.js';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div>
          <Bincreator />
          <Binlist />
        </div>
    )
  }
}

export default App;