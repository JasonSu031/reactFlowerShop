import PopularListFr from './PopularListFr';


export default function Popular(){
    return(
        <div className = "bg-light py-4">
            <div className = "mx-5">
                <h5 className = "mx-5">Vérifiez ce qui est populaire !</h5>
            </div>
            <div className = "my-5">
            </div>
            <PopularListFr/>
        </div>
    );
}