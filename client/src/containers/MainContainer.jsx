import React from 'react'
import Grid from '../components/Grid'
import Score from '../components/Score'

class MainContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      player1Positions: [],
      player2Positions: [],
      gameWin: false,
      player1Score: 0,
      player2Score:0,
      draws:0
    }
  }

  render(){
    return(
      <div>
        <Grid player1Positions={this.state.player1Positions} player2Positions={this.state.player2Positions}/>
        <Score player1Score = {this.state.player1Score} player2Score = {this.state.player2Score} draws = {this.state.draws}/>
      </div>
    )
  }

}

export default MainContainer