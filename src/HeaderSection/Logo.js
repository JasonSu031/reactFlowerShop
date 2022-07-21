import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Logo.css';

export default function HeaderImg(){
    const logo = "/assets/FlowerLogo.png";
    return(
        <div>
            <Container>
                <Row>
                    <Col xs = {2}>
                    </Col>
                    <Col xs = {3}>
                        <img src = {process.env.PUBLIC_URL + `${logo}`} alt ="Logo" className="mx-auto d-block" style={{width:"75%"}}/>
                    </Col>
                    <Col xs = {5}className = "styleTitle">
                        <h1 className = " display-3 styleTitle">Simply Flowers</h1>
                    </Col>
                    <Col xs = {2}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}