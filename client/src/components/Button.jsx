import React from 'react'
import GameLogic from '../model/GameLogic.js'

class Button extends React.Component{

  

  handleClick(event){
    const gameLogic = new GameLogic();
    event.preventDefault();
    gameLogic.clickedSquare()

  }


  render(){

    return(
      <button onClick = {this.handleClick}>?</button>
      )

  }
}

export default Button

