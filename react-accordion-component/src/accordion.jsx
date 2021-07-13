import React from 'react';

// const tabs = [
//   { header: 'html', name: 'Hypertext Markup Language', content: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets(CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.' },
//   { header: 'css', name: 'Cascading Stylesheets', content: 'Cascading Styl Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornsertsone technology of the World Wide Web alongside HTML and JavaScript.' },
//   { header: 'js', name: 'JavaScript', content: 'JavaScript, often abbreviated as JS, is a high-level interpreted programming language that conforms to the ECMAScript specification.JavaScript has curly- bracket syntax, dynamic typing, prototype - based object - orientation and first - class functions.' }
// ];

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemId: false };
    this.tabSwitch = this.tabSwitch.bind(this);
    this.mapping = this.mapping.bind(this);
  }

  tabSwitch(event) {
    if (event.target.className === 'htmlTab' || event.target.className === 'htmlText') {
      this.setState({
        itemId: true
      });
    // } else if (event.target.className === 'cssTab' || event.target.className === 'cssText') {
    //   this.setState(prevState => ({
    //     cssClick: !prevState.cssClick
    //   }));
    // } else if (event.target.className === 'jsTab' || event.target.className === 'jsText') {
    //   this.setState(prevState => ({
    //     jsClick: !prevState.jsClick
    //   }));
    // }
    }
  }

  mapping() {
    const tabs = this.props.tabs;
    const tabsRender = tabs.map(tab =>
      <div key={ tab.header }>
        <h3 className={ tab.header + 'Tab'} onClick={this.tabSwitch}>
          {tab.name}
        </h3>
        <p className={this.state.itemId}>
          {tab.content}
        </p>
      </div>
    );

    return tabsRender;
  }

  render() {
    return (
      <div>
        {this.mapping()}
      </div>
    );
  }
}

// <div className="accordion">
//   <div className="htmlTab" onClick={this.tabSwitch}>
//     <h3 className="htmlText">Hypertext Markup Language</h3>
//     <div className="">
//       ...
//     </div>
//   </div>
//   <div className="cssTab" onClick={this.tabSwitch}>
//     <h3 className="cssText">Cascading Style Sheets</h3>
//     <div className="">
//       ...
//     </div>
//   </div>
//   <div className="jsTab" onClick={this.tabSwitch}>
//     <h3 className="jsText">JavaScript</h3>
//     <div className="">
//       ...
//     </div>
//   </div>
// </div>
