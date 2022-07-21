import FlowerCard from './FlowerCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PopularList(){
    const rose = '/assets/rose.jpg';
    const f1 = '/assets/f1.png';
    const f2 = '/assets/f2.png';
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col xs = {1}className ="d-flex justify-content-center"/>
                    <Col className ="m-auto d-block">
                        <Row>
                            <Col className = "d-flex justify-content-center">
                                <FlowerCard img = {process.env.PUBLIC_URL + `${rose}`} name = {"Rosa"} dsc = {"Elegant and beautiful..."} price = "$12"/>
                            </Col>
                            <Col xs={1}/>
                            <Col className = "d-flex justify-content-center">
                                <FlowerCard img = {process.env.PUBLIC_URL + `${f1}`} name = {"Elegant Pink"} dsc = {"A pink bomb"} price = "$15"/>
                            </Col>
                            <Col xs={1}/>
                            <Col className = "d-flex justify-content-center">
                                <FlowerCard img = {process.env.PUBLIC_URL + `${f2}`} name = {"Koffee"} dsc = {"Accompanies you while you drink coffee"} price = "$13"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs = {1} className ="m-auto d-block"/>
                </Row>
            </Container>
            
        </div>
    );
}