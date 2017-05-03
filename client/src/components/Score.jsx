import React from 'react'

class Score extends React.Component {

  render(){
    return (
      <div>
          <section>{this.props.player1Score}</section>
          <section>{this.props.player2Score}</section>
          <section>{this.props.draws}</section>
      </div>
    )
  }

}

export default Score