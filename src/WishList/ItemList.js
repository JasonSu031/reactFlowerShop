import Button from 'react-bootstrap/Button';

import Item from './Item.js';

export default function ItemList(){
    return(
        <div>
            <Item/>
            <Item/>
            <Item/>
            <Button variant = "success" className = "buyBtn mx-auto d-block mt-3"><h6>Buy</h6></Button>
        </div>
    );
}