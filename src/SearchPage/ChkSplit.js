import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ChkSplit({ele1, ele2, ele3}){
    return(
        <div>
            <Container>
                <Row>
                    <Col xs = {4}>
                        {ele1}
                    </Col>
                    <Col xs = {4}>
                        {ele2}
                    </Col>
                    <Col xs = {4}>
                        {ele3}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}