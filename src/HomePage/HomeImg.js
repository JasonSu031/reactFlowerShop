import pink1 from '../assets/pink1.jpg';


export default function HomeImg(){
    return(
        <div className = "mb-5">
            <img src = {pink1} className = "d-block m-auto" style = {{width:"70%"}}></img>
        </div>
    );
}