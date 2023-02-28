import { useState } from "react"
import Cell from "../Cell/Cell"

export default function Board({turn, board, handleClick}) {
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