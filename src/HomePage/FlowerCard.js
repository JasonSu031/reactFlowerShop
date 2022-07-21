import {Link} from 'react-router-dom';

import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

export default function FlowerCard({img, name, dsc, price}) {
    return (
        <div className = "m-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title className = "d-flex justify-content-center">{name}</Card.Title>
                    <Card.Text className = "d-flex justify-content-center">
                        Price: {price}
                    </Card.Text>
                    <Link to = "/reactFlowerShop/details" className = "text-decoration-none"  state = {{cardImg:img, cardName:name, cardDsc:dsc, cardPrice:price}}>
                        <Button className = "d-block m-auto border" variant="success">View this flower</Button>
                    </Link>
                    
                </Card.Body>
            </Card>
        </div>
    );
}