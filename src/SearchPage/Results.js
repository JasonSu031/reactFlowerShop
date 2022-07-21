import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResFlowerCard from './ResFlowerCard';

import {CaretRightFill} from 'react-bootstrap-icons';
import {CaretLeftFill} from 'react-bootstrap-icons';

export default function Results(){
    const rose = "/assets/rose.jpg";
    const f1 = "/assets/f1.png";
    const f2 = "/assets/f2.png";
    const f3 = "/assets/f3.png";
    const f4 = "/assets/f4.png";
    const f5 = "/assets/f5.png";
    
    return (
        <div className = "border mb-5">
            <Container>
                <Row>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${rose}`} name = "Rosa" dsc = "Elegant and beautiful..." price = "$12"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${f1}`} name = "Elegant Pink" dsc = "A pink bomb." price = "$15"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${f2}`} name = "Koffee" dsc = "Accompanies you while you drink coffee :)" price = "$13"/></Col>
                </Row>
                <Row>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${f3}`} name = "Peacock" dsc = "Accessorize your home!" price = "$14"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${f4}`} name = "Chocolate with Roses" dsc = "Present the flowers... and then the chocolates beneath." price = "$50"/></Col>
                    <Col xs={1}/>
                    <Col xs = {3}><ResFlowerCard image = {process.env.PUBLIC_URL + `${f5}`} name = "Pink Mini" dsc = "A smaller and pink-er version of 'Chocolate with Roses'" price = "$25"/></Col>
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