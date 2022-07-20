import HomeImg from './HomeImg';
import Popular from './Popular';


export default function Home(){
    return (
        <div className = "my-5">
            <HomeImg />
            <Popular/>
        </div>
    );
}