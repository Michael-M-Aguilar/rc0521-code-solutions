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

  handleClick(e) {
    if (e.target.className === 'fas fa-bars fa-2x') {
      this.setState(prevState => ({
        isSatisfied: !prevState.isSatisfied
      }));
    }
  }

  handleClickWhenOn(e) {
    if (e.target.className === 'modalOn' || e.target.className === 'choice') {
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

  closeModal(e) {
    if (e.target.className === 'modalOn') {
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
            <h2 className="choice">Menu</h2>
            <h4 className="choice">About</h4>
            <h4 className="choice">Get Started</h4>
            <h4 className="choice">Sign In</h4>
          </div>
        </div>
      </div>
    );
  }
}
