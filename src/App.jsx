import { useState } from 'react'
import { players, winningCombinations } from './constants'
import Board from './components/Board/Board'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(players[0])

  function swapTurn() {
    setTurn(prevState => prevState === players[0] ? players[1] : players[0])
  }

  

  function handleClick (index) {
    // if the cell is already played, return
    if ( board[index] ) return  

    // update the board
    const updatedBoard = [...board]
    updatedBoard[index] = turn
    setBoard(updatedBoard)

    // switch turns
    swapTurn()

    // verify if the move wins or draws
    

  }

  return (
    <div className="container">
        <header>
          <h1>Tic-Tac-Toe</h1>
        </header>
        <Board 
          turn={turn}
          board={board}
          handleClick={handleClick}
        />
        <footer>

        </footer>
    </div>
  )
}

export default App
