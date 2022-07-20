import HomeImg from './HomeImg';
import Popular from './Popular';


export default function Home(){
    return (
        <div className = "my-4">
            <HomeImg />
            <Popular/>
        </div>
    );
}