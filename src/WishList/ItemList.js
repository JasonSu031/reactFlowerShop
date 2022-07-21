import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import Item from './Item.js';

export default function ItemList(){
    return(
        <div>
            <Item/>
            <Item/>
            <Item/>
            <Link to = "/reactFlowerShop/success" className = "text-decoration-none" state = {{status:"Purchase"}}>
                <Button variant = "success" className = "buyBtn mx-auto d-block mt-3"><h6>Buy</h6></Button>
            </Link>
        </div>
    );
}