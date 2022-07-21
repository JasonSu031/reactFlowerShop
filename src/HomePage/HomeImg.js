
export default function HomeImg(){
    const pink1 = '/assets/pink1.jpg';

    return(
        <div className = "mb-5">
            <img src = {process.env.PUBLIC_URL + `${pink1}`} className = "d-block m-auto" style = {{width:"70%"}}></img>
        </div>
    );
}