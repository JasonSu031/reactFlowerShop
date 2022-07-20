import './SplitPane.css'

export default function SplitPane({left, right}){
    return(
        <div className = "main">
            <div className = "left">{left}</div>
            <div className = "right">{right}</div>
        </div>
        
    );
}