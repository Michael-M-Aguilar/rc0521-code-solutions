import React from 'react';

const buttonColors = [
  'firstButton',
  'secondButton',
  'thirdButton',
  'fourthButton',
  'fifthButton',
  'sixthButton'
];

export default class ButtonChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.clicker = this.clicker.bind(this);
  }

  clicker() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  classes() {
    if (this.state.counter <= 3) {
      return `buttonSize ${buttonColors[0]}`;
    } else if (this.state.counter <= 6) {
      return `buttonSize ${buttonColors[1]}`;
    } else if (this.state.counter <= 9) {
      return `buttonSize ${buttonColors[2]}`;
    } else if (this.state.counter <= 12) {
      return `buttonSize ${buttonColors[3]}`;
    } else if (this.state.counter <= 15) {
      return `buttonSize ${buttonColors[4]}`;
    } else {
      return `buttonSize ${buttonColors[5]}`;
    }
  }

  render() {
    return (
      <button
      className={this.classes()}
      onClick={this.clicker}>
        Hot Button
      </button>
    );
  }
}
