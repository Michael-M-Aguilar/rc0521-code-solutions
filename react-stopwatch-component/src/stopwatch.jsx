import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false, tick: 0 };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
    this.setState(prevState => ({ isClicked: !prevState.isClicked }));
  }

  iconChange() {
    if (this.state.isClicked === false) {
      return 'fas fa-play fa-3x';
    } else {
      return 'fas fa-pause fa-3x';
    }
  }

  // tick() {
  //   if (this.state.isClicked === true) {

  //   }
  // }

  // watchClicked() {
  //   if (this.state.isClicked === false) {
  //     this.setState({ tick: 0 });
  //   }
  // }

  render() {
    return (
      <div>
        <div className="circle" onClick={this.watchClicked()}>
          <span className="number">{this.state.tick}</span>
        </div>
        <div className="secondDiv">
          <i className={this.iconChange()} onClick={this.buttonClicked}></i>
        </div>
      </div>
    );
  }
}
