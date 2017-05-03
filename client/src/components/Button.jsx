import React from 'react'
import GameLogic from '../model/GameLogic.js'

class Button extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      display: ""
    }
  }

  // componentDidUpdate(prevProps, prevState){
  //   this.setState.moveCounter++
  //   console.log(this.state.moveCounter)
  // }

  handleClick(event){
    if(this.state.clicked){
      return
    }
    this.props.togglePlayer()
    const gameLogic = new GameLogic();
    event.preventDefault();
    this.state.clicked = true;
    if(this.props.currentPlayer === "x"){
      this.state.display = "x"
    }else{
      this.state.display = "o"
    }
    // const playerMove = gameLogic.clickedSquare(this.state.moveCounter)
    // this.setState({move: playerMove})
    // console.log(this.props.moveCounter)
    // this.setState({ moveCounter: this.state.moveCounter + 1 })



  }

  render(){
    return(
      <button onClick = {this.handleClick.bind(this)}>{ this.state.display }</button>
      )
  }
}

export default Button

