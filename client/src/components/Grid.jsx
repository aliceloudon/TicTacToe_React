import React from 'react'

class Grid extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squares: [ 
      { id: 1, clicked: false }, 
      { id: 2, clicked: false }, 
      { id: 3, clicked: false }, 
      { id: 4, clicked: false }, 
      { id: 5, clicked: false }, 
      { id: 6, clicked: false }, 
      { id: 7, clicked: false }, 
      { id: 8, clicked: false }, 
      { id: 9, clicked: false }
      ]
    }
  }


  render(){

    const gridSquares = this.state.squares.map( (square) => {
      return <button key={square.id} clicked={square.clicked}></button>
    })

    return(
      <div id ="grid">
        {gridSquares}
      </div>
    )

  }

}

export default Grid
