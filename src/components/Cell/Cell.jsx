export default function Cell({value, hover, handleClick}) {
    const hoverClass = hover ? `turn-${hover}` : ''
    
    return <div 
                className={`cell ${ value || hoverClass}`}
                onClick={handleClick}
            ></div>
 }