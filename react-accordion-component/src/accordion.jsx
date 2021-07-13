import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    this.tabClick = this.tabClick.bind(this);
    // this.htmlClick = this.htmlClick.bind(this);
    // this.cssClick = this.cssClick.bind(this);
    // this.jsClick = this.jsClick.bind(this);
  }

  handleClick() {
    if (event.target.className === 'tab') {
      this.setState(prevState => ({
        isClicked: !prevState.isClicked
      }));
    }
  }

  tabClick() {
    if (this.state.isClicked === false) {
      return 'hideThis';
    } else {
      return 'showThis';
    }
  }
  // htmlClick() {
  //   if (this.state.isClicked === false) {
  //     return 'htmlOff';
  //   } else {
  //     return 'htmlOn';
  //   }
  // }

  // cssClick() {
  //   if (this.state.isClicked === false) {
  //     return 'cssOff';
  //   } else {
  //     return 'cssOn';
  //   }
  // }

  // jsClick() {
  //   if (this.state.isClicked === false) {
  //     return 'jsOff';
  //   } else {
  //     return 'jsOn';
  //   }
  // }

  render() {
    return (
  <div>
    <div className="tab" onClick={this.handleClick}>
      <h3>Hypertext Markup Language</h3>
        <div className={this.state.isClicked}>
          <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.
          With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. </p>
      </div>
    </div>
    <div className="tab" onClick={this.handleClick}>
      <h3>Cascading Style Sheets</h3>
      <div className={this.state.isClicked}>
        <p>Cascading Styl Sheets (CSS) is a style sheet language used for describing the presentation of a document
        written in a markup language like HTML. CSS is a cornsertsone technology of the World Wide Web alongside HTML and JavaScript.</p>
      </div>
    </div>
    <div className="tab" onClick={this.handleClick}>
      <h3>JavaScript</h3>
      <div className={this.state.isClicked}>
        <p>JavaScript, often abbreviated as JS, is a high-level interpreted programming language that conforms to
        the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based
        object-orientation and first-class functions.</p>
      </div>
    </div>
  </div>
    );
  }
}
