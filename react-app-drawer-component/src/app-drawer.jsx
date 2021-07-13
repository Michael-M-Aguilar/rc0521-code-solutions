import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSatisfied: false };
    this.handleClick = this.handleClick.bind(this);
    this.modalOff = this.modalOff.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClickWhenOn = this.handleClickWhenOn.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isSatisfied: !prevState.isSatisfied
    }));
  }

  handleClickWhenOn() {
    if (event.target.className === 'modalOn') {
      this.setState(prevState => ({
        isSatisfied: !prevState.isSatisfied
      }));
    }
  }

  modalOff() {
    if (this.state.isSatisfied === false) {
      return 'modalOff';
    } else {
      return 'modalOn';
    }
  }

  closeModal() {
    if (event.target.className === 'modalOn') {
      return 'modalOff';
    } else {
      return 'modalOn';
    }
  }

  render() {
    return (
      <div>
        <div>
          <i className="fas fa-bars fa-2x" onClick={this.handleClick}></i>
        </div>
        <div id="modal" className={this.modalOff()} onClick={this.handleClickWhenOn}>
          <div className="modalContent">
            <h2>Menu</h2>
            <h4>About</h4>
            <h4>Get Started</h4>
            <h4>Sign In</h4>
          </div>
        </div>
      </div>
    );
  }
}
