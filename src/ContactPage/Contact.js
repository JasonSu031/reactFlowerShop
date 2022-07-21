import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {TelephoneFill} from 'react-bootstrap-icons';
import {EnvelopeFill} from 'react-bootstrap-icons';
import {GeoAltFill} from 'react-bootstrap-icons';
import {ClockFill} from 'react-bootstrap-icons';

export default function Contact(){
    const admin = "/assets/admin.png";
    return(
        <div className = "my-5">
            <Container>
                <Row>
                    <Col xs = {3}>
                    </Col>
                    <Col xs = {3} className = "border">
                        <img className = "img-fluid img-responsive" src = {process.env.PUBLIC_URL + `${admin}`}></img>
                    </Col>
                    <Col  xs = {4} className = "border centerText bg-light">
                        <br/>
                        <h5>Contact the Store Owner!</h5><br/>
                        <TelephoneFill/> : 123-456-7890 <br/>
                        <EnvelopeFill/>  : SimplyFlowers@hotmail.com <br/>
                        <GeoAltFill/>  : 7 Simply Flowers st. Ottawa <br/>
                        <br/>
                        <ClockFill/> : Opening Times:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weekdays: 9:00-9:00 <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weekends: 9:00-9:00 <br/>
                    </Col>
                    <Col  xs = {2}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}