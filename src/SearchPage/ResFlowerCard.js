import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';
import {Link} from 'react-router-dom';

export default function ResFlowerCard({image, name, dsc}) {
    return (
        <div className = "m-3">
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title className = "d-flex justify-content-center">{name}</Card.Title>
                    <Card.Text className = "d-flex justify-content-center">
                        {dsc}
                    </Card.Text>
                    <Link to = "details" className = "text-decoration-none" state = {{cardImg:image}}>
                        <Button className = "d-block m-auto" variant="success">See this flower</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}