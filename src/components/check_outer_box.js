import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { OuterBox } from './outer_box';

export default class CheckOuterBox extends Component {

  clickOutsideContainer = (event) => {
    // guard
    if (event.target.className === 'inner-box') {
      return;
    }
    if (event.target.className !== 'outer-box') {
      return; // if the checkbox is checked don't register a hit.
    }
    console.log("I have been clicked in the outer-box but not in the inner-box...");
    if (this.state.checkOuterBox) {
      this.setState({numberOfClicks: this.state.numberOfClicks + 1});
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      checkOuterBox: true,
      numberOfClicks: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div onClick={this.clickOutsideContainer}>
        <OuterBox />
        <form>
          <label>
            Check for clicks:
            <input
              name="checkOuterBox"
              type="checkbox"
              checked={this.state.checkOuterBox}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Outer box clicks: {this.state.numberOfClicks}
          </label>
        </form>
      </div>
    );
  }

}
