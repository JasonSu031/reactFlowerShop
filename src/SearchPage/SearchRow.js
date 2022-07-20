import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rose from '../assets/rose.jpg';



export default function SearchBox() {
    return (
        <div>
            <Container fluid>
                    <Row>
                        <Col className="d-flex justify-content-center"></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
        </div>
    );
}