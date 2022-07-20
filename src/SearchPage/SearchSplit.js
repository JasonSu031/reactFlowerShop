import './SearchSplit.css'

export default function SearchSplit({left, right}){
    return(
        <div className = "main">
            <div className = "left">{left}</div>
            <div className = "right">{right}</div>
        </div>
        
    );
}