import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var classNames = require('classnames');

class Box extends Component { 
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false }
    this.handleOnMouse = this.handleOnMouse.bind(this);
  }

  handleOnMouse() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  
  render() {
    var liClasses = classNames({
      'RedSquare': !this.state.isToggleOn,
      'BlackSquare': this.state.isToggleOn
    });

    return (
      <div className={liClasses} onMouseEnter={this.handleOnMouse} onMouseLeave={this.handleOnMouse}></div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
  }

  componentDidMount() {
    let boxes = []
    for (let i = 0; i < 2000; ++i) {
      boxes.push(<Box />)
    }
    this.setState({ boxes: boxes })
  }

  render() {
    return (
      <div className="App">
        {this.state.boxes}
      </div>
    );
  }
}

export default App;
