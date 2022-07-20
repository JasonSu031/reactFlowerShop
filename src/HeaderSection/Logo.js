import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/FlowerLogo.jpg';
export default function HeaderImg(){
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <img src = {logo} alt ="Logo" className="mx-auto d-block" style={{width:"75%"}}/>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}