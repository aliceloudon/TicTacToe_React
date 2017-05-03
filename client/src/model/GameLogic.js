class GameLogic {

  clickedSquare(counter){
    if(counter % 2){
      return 'O'
    }
    return 'X'
  }

}

export default GameLogic