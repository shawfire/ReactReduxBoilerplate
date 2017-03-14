import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class OuterBox extends Component {

  clickOutsideContainer = (event) => {
    // guard
    if (event.target.className === 'inner-box') {
      return;
    }
    console.log("I have been clicked in the outer-box but not in the inner-box...");
  }

  render() {
    return (
      <div className="outer-box" onClick={this.clickOutsideContainer}>
        <div className="inner-box">
        </div>
      </div>
    );
  }
}
