import './ImageDetails.css';

export default function ImageDetails({cardImg}){
    return(
        <div>
            <img className = "cardImage m-2 my-4" src = {cardImg}></img>
        </div>
    );
}