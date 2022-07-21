import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResFlowerCard from './ResFlowerCard';

import {CaretRightFill} from 'react-bootstrap-icons';
import {CaretLeftFill} from 'react-bootstrap-icons';

export default function Results(){
    const rose = "/assets/rose.jpg";
    return (
        <div className = "border mb-5">
            <Container>
                <Row>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${rose}`} name = "Rosa" dsc = "Sample Flower" price = "$10"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${rose}`} name = "Rosa" dsc = "Sample Flower" price = "$10"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${rose}`} name = "Rosa" dsc = "Sample Flower" price = "$10"/></Col>
                </Row>
                <Row>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${rose}`} name = "Rosa" dsc = "Sample Flower" price = "$10"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${rose}`} name = "Rosa" dsc = "Sample Flower" price = "$10"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${rose}`} name = "Rosa" dsc = "Sample Flower" price = "$10"/></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col className = "d-flex justify-content-center h6 fw-normal">
                        <span><h4><CaretLeftFill/></h4></span>
                        &nbsp;&nbsp;&nbsp;
                        <span><h4><CaretRightFill/></h4></span>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}