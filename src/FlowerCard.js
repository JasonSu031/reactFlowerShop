import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';

export default function FlowerCard({img, name, dsc}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title className = "d-flex justify-content-center">{name}</Card.Title>
                    <Card.Text className = "d-flex justify-content-center">
                        {dsc}
                    </Card.Text>
                    <Button className = "d-block m-auto" variant="success">See this flower</Button>
                </Card.Body>
            </Card>
        </div>
    );
}