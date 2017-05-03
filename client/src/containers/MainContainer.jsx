import React from 'react'
import Grid from '../components/Grid'
import Score from '../components/Score'

class MainContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      player1Positions: [],
      player2Positions: [],
      gameWin: false
    }
  }

  render(){
    return(
      <div>
        <Grid player1Positions={this.state.player1Positions} player2Positions={this.state.player2Positions}/>
        <Score/>
      </div>
    )
  }

}

export default MainContainer