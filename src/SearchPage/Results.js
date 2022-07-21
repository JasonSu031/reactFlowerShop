import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResFlowerCard from './ResFlowerCard';


export default function Results(){
    const rose = "/assets/rose.jpg";
    return (
        <div className = "border mb-5">
            <Container>
                <Row>
                    <Col xs = {3}><ResFlowerCard image = {rose} name = "Rosa" dsc = "Sample Flower"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {rose} name = "Rosa" dsc = "Sample Flower"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {rose} name = "Rosa" dsc = "Sample Flower"/></Col>
                </Row>
                <Row>
                    <Col xs = {3}><ResFlowerCard image = {rose} name = "Rosa" dsc = "Sample Flower"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {rose} name = "Rosa" dsc = "Sample Flower"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {rose} name = "Rosa" dsc = "Sample Flower"/></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className = "d-flex justify-content-center h6 fw-normal">1 2 3 4 5</Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}