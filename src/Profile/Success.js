import {Link, useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Login.css';

export default function Success(){
    const location = useLocation();
    const {status} = location.state;

    return(
        <div>
            <h4 className = "centerText mt-5">{status} Successful!</h4>
            <Link to = "/" className = "text-decoration-none">
                <Button variant = "success" className = "py-1 my-4 d-block mx-auto">Go to Home</Button>
            </Link>
        </div>
    );
}