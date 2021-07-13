import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { htmlClick: false, cssClick: false, jsClick: false };
    this.htmlSwitch = this.htmlSwitch.bind(this);
    this.cssSwitch = this.cssSwitch.bind(this);
    this.jsSwitch = this.jsSwitch.bind(this);
    this.htmlClass = this.htmlClass.bind(this);
    this.cssClass = this.cssClass.bind(this);
    this.jsClass = this.jsClass.bind(this);
  }

  htmlSwitch(event) {
    if (event.target.className === 'htmlTab') {
      this.setState(prevState => ({
        htmlClick: !prevState.htmlClick
      }));
    }
  }

  cssSwitch(event) {
    if (event.target.className === 'cssTab') {
      this.setState(prevState => ({
        cssClick: !prevState.cssClick
      }));
    }
  }

  jsSwitch(event) {
    if (event.target.className === 'jsTab') {
      this.setState(prevState => ({
        jsClick: !prevState.jsClick
      }));
    }
  }

  htmlClass() {
    if (this.state.htmlClick === false) {
      return 'htmlOff';
    } else {
      return 'htmlOn';
    }
  }

  cssClass() {
    if (this.state.cssClick === false) {
      return 'cssOff';
    } else {
      return 'cssOn';
    }
  }

  jsClass() {
    if (this.state.jsClick === false) {
      return 'jsOff';
    } else {
      return 'jsOn';
    }
  }

  render() {
    return (
  <div>
    <div className="htmlTab" onClick={this.htmlSwitch}>
      <h3>Hypertext Markup Language</h3>
        <div className={this.htmlClass()}>
          <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.
          With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. </p>
      </div>
    </div>
    <div className="cssTab" onClick={this.cssSwitch}>
      <h3>Cascading Style Sheets</h3>
      <div className={this.cssClass()}>
        <p>Cascading Styl Sheets (CSS) is a style sheet language used for describing the presentation of a document
        written in a markup language like HTML. CSS is a cornsertsone technology of the World Wide Web alongside HTML and JavaScript.</p>
      </div>
    </div>
    <div className="jsTab" onClick={this.jsSwitch}>
      <h3>JavaScript</h3>
      <div className={this.jsClass()}>
        <p>JavaScript, often abbreviated as JS, is a high-level interpreted programming language that conforms to
        the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based
        object-orientation and first-class functions.</p>
      </div>
    </div>
  </div>
    );
  }
}
