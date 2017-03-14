import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OuterBox from './outer_box';
import CheckOuterBox from './check_outer_box';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <CheckOuterBox />
      </div>
    );
  }
}
