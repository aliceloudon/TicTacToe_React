import React from 'react'

class Score extends React.Component {

  render(){
    return (
      <div id="score-box">
          <section>Player 1: {this.props.player1Score}</section>
          <section>Player 2: {this.props.player2Score}</section>
          <section>Draws: {this.props.draws}</section>
      </div>
    )
  }

}

export default Score