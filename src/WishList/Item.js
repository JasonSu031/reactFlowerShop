import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Item.css'
export default function Item() {
    return (
        <div>
            <Container>
                <Badge pill bg="light" text="dark" className="item p-3 my-3">
                    <Row>
                        <Col xs={3}>
                            <h5 className="centerText">Item name: </h5>
                        </Col>
                        <Col xs={5}></Col>
                        <Col xs={2}>
                            <h5 className="centerText">Price</h5>
                        </Col>
                        <Col xs={2}>
                            <Button variant="nav-light" className="active p-0">
                                <h5>Remove</h5>
                            </Button>
                        </Col>
                    </Row>
                </Badge>
            </Container>
        </div>
    );
}