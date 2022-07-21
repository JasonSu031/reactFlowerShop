import FlowerCard from './FlowerCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PopularList(){
    const rose = '/assets/rose.jpg';
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col xs = {1}className ="d-flex justify-content-center"/>
                    <Col className ="m-auto d-block">
                        <Row>
                            <Col className = "d-flex justify-content-center">
                                <FlowerCard img = {rose} name = {"Rosa"} dsc = {"This is a sample flower"}/>
                            </Col>
                            <Col xs={1}/>
                            <Col className = "d-flex justify-content-center">
                                <FlowerCard img = {rose} name = {"Rosa"} dsc = {"This is a sample flower"}/>
                            </Col>
                            <Col xs={1}/>
                            <Col className = "d-flex justify-content-center">
                                <FlowerCard img = {rose} name = {"Rosa"} dsc = {"This is a sample flower"}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs = {1} className ="m-auto d-block"/>
                </Row>
            </Container>
            
        </div>
    );
}