import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SplitFifty({left,lSize, text, tSize, right, rSize}){
    return(
        <div>
            <Container>
                <Row>
                    <Col xs = {lSize}>
                        {left}
                    </Col>
                    <Col xs = {tSize}>
                        {text}
                    </Col>
                    <Col xs = {rSize}>
                        {right}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}