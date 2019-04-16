import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const mouseX=event.clientX;
    const mouseY=event.clientY;
    drawChromeBoiAtCoords(mouseX,mouseY)
  }

  handleKeyPress = (e) => {
    if(e.key === "a"){
      console.log('resize up')
      resize('+')
    }else if(e.key ==="s"){
      console.log('resize down')
      resize('-')
    }
  }

  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
