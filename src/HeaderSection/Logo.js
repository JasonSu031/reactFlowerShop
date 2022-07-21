import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HeaderImg(){
    const logo = "/assets/FlowerLogo.jpg";
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