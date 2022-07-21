import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Login.css';

export default function Login(){
    return(
        <div>
            <h4 className = "textCenter py-2">Login</h4>
            <Container>
                <Row>
                    <Col xs = {4}>

                    </Col>
                    <Col xs = {4} className = "border bg-light">
                        
                    </Col>
                    <Col xs = {4}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}