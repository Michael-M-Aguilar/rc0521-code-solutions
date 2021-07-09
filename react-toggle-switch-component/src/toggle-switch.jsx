import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  textContent() {
    if (this.state.isClicked === false) {
      return 'Off';
    } else {
      return 'On';
    }
  }

  buttonChange() {
    if (this.state.isClicked === false) {
      return 'buttonUnclicked';
    } else {
      return 'buttonClicked';
    }
  }

  buttonMove() {
    if (this.state.isClicked === false) {
      return 'circle';
    } else {
      return 'circleClicked';
    }
  }

  render() {
    return (
      <div className="rendered">
        <button className={this.buttonChange()} onClick={this.handleClick}>
          <span className={this.buttonMove()}></span>
        </button>
        <div>{this.textContent()}</div>
      </div>
    );
  }
}
