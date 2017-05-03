import React from 'react'
import  Button from './Button.jsx'
// import GameLogic from '../model/GameLogic'

class Grid extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squares: [ 
      { id: 1, p1clicked: false, p2clicked: false }, 
      { id: 2, p1clicked: false, p2clicked: false }, 
      { id: 3, p1clicked: false, p2clicked: false }, 
      { id: 4, p1clicked: false, p2clicked: false }, 
      { id: 5, p1clicked: false, p2clicked: false }, 
      { id: 6, p1clicked: false, p2clicked: false }, 
      { id: 7, p1clicked: false, p2clicked: false }, 
      { id: 8, p1clicked: false, p2clicked: false }, 
      { id: 9, p1clicked: false, p2clicked: false }
      ]
    }
  }



  render(){

    const gridSquares = this.state.squares.map( (square) => {
      return <Button key={square.id} p1clicked={square.p1clicked} p2clicked={square.p2clicked} ></Button>
    })

    return(
      <div id ="grid">
        {gridSquares} 
      </div>
    )

  }
}

export default Grid
