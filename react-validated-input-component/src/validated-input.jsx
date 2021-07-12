import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSatisfied: false, value: '' };

    this.iconChange = this.iconChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.emptySpace = this.emptySpace.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSatisfied: true });
  }

  iconChange() {
    if (this.state.value.length < 8) {
      return 'fas fa-times fa-2x';
    } else {
      return 'fas fa-check fa-2x';
    }
  }

  emptySpace() {
    if (this.state.value.length === 0) {
      return 'A password is required';
    } else if (this.state.value.length < 8) {
      return 'Your password is too short';
    } else {
      return '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="password-form">
          <label htmlFor="password">
            Password
            <div className="spacing">
              <input type="text" name="password" id="password" value={this.state.value} onChange={this.handleChange} />
              <i className={this.iconChange()}></i>
            </div>
              <p>{this.state.isSatisfied ? this.emptySpace() : ''}</p>
          </label>
        </form>
      </div>
    );
  }
}
