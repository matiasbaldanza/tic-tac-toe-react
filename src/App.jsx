import { useState } from 'react'
import { players, winningCombinations } from './constants'
import Board from './components/Board/Board'
import GameEndBanner from './components/GameEndBanner/GameEndBanner'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(players[0])
  const [winner, setWinner] = useState(null)

  function swapTurn() {
    setTurn(prevState => prevState === players[0] ? players[1] : players[0])
  }

  function thereIsAWinner(updatedBoard) {
    return winningCombinations.some( combination =>
        combination.every( cell => updatedBoard[cell] === turn )
    )
  }

  function handleClick (index) {
    if ( winner ) return
    if ( board[index] ) return  

    const updatedBoard = [...board]
    updatedBoard[index] = turn
    setBoard(updatedBoard)

    if ( thereIsAWinner(updatedBoard) ) {
      setWinner(turn)
      return
    }

    if ( updatedBoard.every(cell => cell !== null) ) {
      setWinner('draw')
      return
    }

    // switch turns
    swapTurn()
  }

  return (
    <div className="container">
        <header>
          <h1>Tic-Tac-Toe</h1>
        </header>
        <Board 
          turn={ !winner ? turn : null }
          board={board}
          handleClick={handleClick}
        />
        <footer>
         { winner ?  <GameEndBanner winner={winner}/> : ''}
        </footer>
    </div>
  )
}

export default App

// TODO: End game banner
// TODO: Reset game button
// TODO: Reset game function

