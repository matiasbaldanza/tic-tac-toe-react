import { useState } from "react"
import Cell from "../Cell/Cell"

export default function Board() {
    const [board, setBoard] = useState(Array(9).fill(null))
    
    function handleClick (index) {
        const updatedBoard = [...board]
        updatedBoard[index] = "circle"
        setBoard(updatedBoard)
        console.log(updatedBoard)
    }

    return (
        <div className="board">
            {board.map((cell, index) => 
                        <Cell 
                            key={index}
                            value={board[index]}
                            handleClick={() => handleClick(index)}
                        />)
            }
        </div>
    )
}