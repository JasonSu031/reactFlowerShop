import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Login.css';

export default function SignUp(){
    return(
        <div>
            <h4 className = "textCenter py-2">Sign Up</h4>
            <Container>
                <Row>
                    <Col xs = {4}>

                    </Col>
                    <Col xs = {4} className = "border bg-light p-3">
                        <Form.Label>
                            Username:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />
                        <Form.Label className = "pt-3">
                            Password:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Password" />

                        <Link to = "/reactFlowerShop/success" className = "text-decoration-none" state = {{status:"Sign Up"}}>
                            <Button variant = "success" className = "py-1 my-4 d-block mx-auto">Sign Up</Button>
                        </Link>
                        
                    </Col>
                    <Col xs = {4}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}