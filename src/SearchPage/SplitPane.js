import './SplitPane.css';

export default function SplitPane({left, right}){
    return(
        <div className = "parent1">
            <div className ="left1">
                {left}
            </div>
            <div className ="right1">
                {right}
            </div>
        </div>
    );
}