import React, { Component } from 'react';

class Activebins extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span>{this.props.binName}</span>
        <button onClick={(e) => {this.props.deleteBin(e)}}></button>
      </div>
    )
  }
}
export default Activebins;
