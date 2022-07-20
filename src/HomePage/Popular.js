import PopularList from './PopularList';


export default function Popular(){
    return(
        <div className = "bg-light py-4">
            <div className = "mx-5">
                <h5 className = "mx-5">Check What's Popular!</h5>
            </div>
            <div className = "my-5">
            </div>
            <PopularList/>
        </div>
    );
}