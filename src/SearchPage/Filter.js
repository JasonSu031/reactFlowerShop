import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SplitFifty from './SplitFifty';
import ChkSplit from './ChkSplit';
import CreateBlank from './CreateBlank';

import './Filter.css';

export default function Filter() {
    return (
        <div>
            <Container >
                <Row>
                    <Form>
                        <Form.Group className="bg-light border me-3 rounded-3">
                            <Form.Label className="d-flex justify-content-center h5 pt-2">Filter</Form.Label>
                            <p className="ms-2">Price Range:</p>
                            <SplitFifty left={<Form.Control type="number" placeholder="0" />} lSize={5} text={"-"} tSize={1} right={<Form.Control type="number" placeholder="unlimited" />} rSize={5} />
                            <p></p>
                            <p className="ms-2">Themes:</p>
                            <p></p>
                            <ChkSplit ele1 = {<Form.Check type = "checkbox" label = "Celebration"/>} ele2 ={<Form.Check type = "checkbox" label = "Sympathy"/>} ele3 ={<Form.Check type = "checkbox"  label = "Joy"/>}/>
                            <ChkSplit ele1 = {<Form.Check type = "checkbox" label = "Sad"/>} ele2 ={<Form.Check type = "checkbox" label = "Courage"/>} ele3 ={<Form.Check type = "checkbox"  label = "Love"/>}/>
                            <p></p>
                            <p className="ms-2">Occassion:</p>
                            <ChkSplit ele1 = {<Form.Check type = "checkbox" label = "Halloween"/>} ele2 ={<Form.Check type = "checkbox" label = "Birthday"/>} ele3 ={<Form.Check type = "checkbox"  label = "Wedding"/>}/>
                            <ChkSplit ele1 = {<Form.Check type = "checkbox" label = "Anniversary"/>} ele2 ={<Form.Check type = "checkbox" label = "Christmas"/>} ele3 ={<Form.Check type = "checkbox"  label = "Valentines"/>}/>
                            <p></p>
                            <p className="ms-2">Availability:</p>
                            <Form.Select className ="aThird ms-3">
                                <option>Any</option>
                                <option>In-Store</option>
                                <option>Unavailable</option>
                            </Form.Select>
                            <p></p>
                            <Button className = "mx-auto d-block m-4 rounded-3 btn-secondary">Apply Filter</Button>
                            <CreateBlank/>
                        </Form.Group>
                    </Form>

                </Row>
            </Container>
        </div>
    );
}