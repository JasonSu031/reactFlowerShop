import './DetailSplit.css';

export default function DetailSplit({left, right}){
    return(
        <div>
            <div className = "detailLeft">
                {left}
            </div>
            <div className = "detailRight">
                {right}
            </div>
        </div>
    );
}