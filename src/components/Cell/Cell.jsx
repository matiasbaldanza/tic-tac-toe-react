export default function Cell({value, handleClick}) {
    return <div 
                className={`cell ${ value || ''}`}
                onClick={handleClick}
            ></div>
 }