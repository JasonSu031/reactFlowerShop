import {useLocation} from 'react-router-dom';

import HomeImg from './HomeImg';
import Popular from './Popular';
import PopularFr from './PopularFr';

export default function Home(){
    
    let location = useLocation();
    if(location.state==null);
    else {
        const {language} = location.state;
        if(language==="french"){
            return(
                <div className = "my-4">
                    <HomeImg />
                    <PopularFr/>
                </div>
            );
        }
    }

    return(
        <div className = "my-4">
            <HomeImg />
            <Popular/>
        </div>
    );
}