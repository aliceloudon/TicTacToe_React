import React from 'react'
import  Button from './Button.jsx'
// import GameLogic from '../model/GameLogic'

class Grid extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squares: [ 
      { id: 1 }, 
      { id: 2 }, 
      { id: 3 }, 
      { id: 4 }, 
      { id: 5 }, 
      { id: 6 }, 
      { id: 7 }, 
      { id: 8 }, 
      { id: 9 }
      ],
      currentPlayer: "x"
    }
  }


  togglePlayer(){
    let newPlayer;
    console.log(this.state.currentPlayer)

    if(this.state.currentPlayer === "x"){
      newPlayer = "o"
    }
    else{
      newPlayer = "x"
    }
  
    this.setState( { currentPlayer: newPlayer } )
  } 


  render(){

    const gridSquares = this.state.squares.map( (square) => {
      return <Button key={square.id} clicked={square.p1clicked} currentPlayer = {this.state.currentPlayer} togglePlayer={this.togglePlayer.bind(this)} ></Button>
    })

    return(
      <div id ="grid">
        {gridSquares} 
      </div>
    )

  }
}

export default Grid
