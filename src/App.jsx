import { useState } from 'react'
import { players, winningCombinations } from './constants'
import Board from './components/Board/Board'
import GameEndBanner from './components/GameEndBanner/GameEndBanner'
import NotificationsBanner from './components/NotificationsBanner/NotificationsBanner'

function App() {

  const resetBoard = () => Array(9).fill(null)

  const [board, setBoard] = useState(() => resetBoard())
  const [turn, setTurn] = useState(players[0])
  const [winner, setWinner] = useState(null)

  function swapTurn() {
    setTurn(prevState => prevState === players[0] ? players[1] : players[0])
  }

  function thereIsAWinner(updatedBoard) {
    const result = winningCombinations.find( combination =>
        combination.every( cell => updatedBoard[cell] === turn )
    )
    console.log(result)
    return result
  }

  function resetGame() {
    setBoard(resetBoard)
    setTurn(players[0])
    setWinner(null)
  }

  function handleClick (index) {
    if ( winner ) return
    if ( board[index] ) return  

    const updatedBoard = [...board]
    updatedBoard[index] = turn
    
    const winningMove = thereIsAWinner(updatedBoard)
    console.log(winningMove)
    if ( winningMove ) {
      setWinner(turn)
      winningMove.map( (cell, index) => updatedBoard[cell] = 'win-' + updatedBoard[cell] )
      setBoard(updatedBoard)
      return 
    }
    
    setBoard(updatedBoard)

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
         { winner 
            ?  <>
                  <GameEndBanner winner={winner}/>
                  <button onClick={resetGame} autoFocus>RESTART</button> 
                </>
            : <NotificationsBanner turn={turn}/>
          }
        </footer>
    </div>
  )
}

export default App
