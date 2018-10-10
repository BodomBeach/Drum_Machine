import React, { Component } from 'react';
import '../App.scss';
import DrumMachine from './DrumMachine'
import Signature from './Signature'
import Background from '../images/wood-bg.jpg'


var appStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: "url(" + Background + ")",
    backgroundSize: 'cover',
    paddingTop: '10px',
    marginTop: '-10px',
    paddingBottom: '41px',
}

class App extends Component {
  render() {
    return (
        <div style={appStyle} className='App'>
            <DrumMachine />
            <Signature />
        </div>
    );
  }
}

export default App;
