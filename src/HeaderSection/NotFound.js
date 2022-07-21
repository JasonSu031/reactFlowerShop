import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function NotFound(){
    return(
        <div>
            <h4 className = "centerText mt-5">Sorry, your page could not be found</h4>
            <Link to = "/reactFlowerShop/" className = "text-decoration-none">
                <Button variant = "success" className = "py-1 my-4 d-block mx-auto">Navigate to Home Page</Button>
            </Link>
        </div>
    );
}