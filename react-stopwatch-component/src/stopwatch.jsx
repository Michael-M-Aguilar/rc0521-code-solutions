import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, ticker: 0 };

    this.buttonClicked = this.buttonClicked.bind(this);
    this.tick = this.tick.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.iconChange = this.iconChange.bind(this);
    this.resetStopWatch = this.resetStopWatch.bind(this);
  }

  buttonClicked() {
    this.setState(prevState => ({ isClicked: !prevState.isClicked }));
    if (this.state.isClicked === false) {
      this.play();
    } else {
      this.pause();
    }
  }

  iconChange() {
    if (this.state.isClicked === false) {
      return 'fas fa-play fa-3x';
    } else {
      return 'fas fa-pause fa-3x';
    }
  }

  play() {
    this.timerId = setInterval(
      () => this.tick(), 1000);
  }

  tick() {
    this.setState({ ticker: this.state.ticker + 1 });
  }

  resetStopWatch() {
    if (!this.state.isClicked) {
      this.setState({ ticker: 0 });
    }
  }

  pause() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <div className="circle" onClick={this.resetStopWatch} >
          <span className="number">{this.state.ticker}</span>
        </div>
        <div className="secondDiv">
          <i className={this.iconChange()} onClick={this.buttonClicked}></i>
        </div>
      </div>
    );
  }
}
