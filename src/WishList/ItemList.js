import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import Item from './Item.js';

export default function ItemList({name, dsc, price}){
    return(
        <div>
            <Item name = {name} dsc = {dsc} price = {price}/>
            <Link to = "/reactFlowerShop/success" className = "text-decoration-none" state = {{status:"Purchase"}}>
                <Button variant = "success" className = "buyBtn mx-auto d-block mt-3">Buy</Button>
            </Link>
        </div>
    );
}