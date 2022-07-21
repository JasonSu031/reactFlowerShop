import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Design(){
    return(
        <div className = "my-5">
            <Container>
                <Row>
                    <Col xs = {2}></Col>
                    <Col xs= {8} className = "border bg-light px-4 py-3">
                        <Form.Label>Upload an image of your flower design:</Form.Label>
                        <Form.Control type = "file"></Form.Control>
                        <br/>
                        <Form.Label>Follow the design:</Form.Label>
                        <Form.Select>
                            <option>Exactly</option>
                            <option>Similar Design</option>
                            <option>Similar Mood</option>
                            <option>Take Inspiration</option>
                        </Form.Select>
                        <br/>
                        <Form.Label>What feelings are you trying to portray?</Form.Label>
                        <Form.Control as = "textarea">
                        </Form.Control>
                        <br/>
                        <Form.Label>Elements that must be included in the design:</Form.Label>
                        <Form.Control as = "textarea">
                        </Form.Control>
                        <br/>
                        <Link to = "/success" className = "text-decoration-none" state = {{status:"Submission"}}>
                            <Button variant = "success" className = "py-1 my-4 d-block mx-auto">Submit</Button>
                        </Link>
                    </Col>
                    <Col xs = {2}></Col>
                </Row>
            </Container>
        </div>
    );
}