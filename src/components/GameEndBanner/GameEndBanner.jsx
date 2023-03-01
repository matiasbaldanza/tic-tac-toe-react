export default function GameEndBanner({ winner }) {
    return winner !== 'draw'
        ? <span>{`${winner.toUpperCase()} wins!`}</span> 
        : <span>It's a draw!</span>
}