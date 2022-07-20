import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SearchSplit from './SearchSplit';

import {Search} from 'react-bootstrap-icons';
import './SearchRow.css';

export default function SearchRow() {
    return (
        <div>
            <Container fluid>
                    <Row>
                        <Col xs = {4} className="d-flex justify-content-center"></Col>
                        <Col xs = {4} >
                            <Form>
                                <Form.Group className ="parent">
                                    <SearchSplit left = {<Form.Control type = "text" placeholder = "Search by name" className ="d-inline rRad"/>} right = {<Button variant = "light" type = "submit" className = "btn-outline-secondary d-inline lRad"><Search className = "d-block m-auto my-1"/></Button>}/>
                                </Form.Group>
                            </Form>
                            
                        </Col>
                        <Col xs = {1} />
                        <Col xs = {2} >
                            <Form.Select>
                                <option value = "new">Newest</option>
                                <option value = "old">Oldest</option>
                                <option value = "priceH">Highest Price</option>
                                <option value = "priceD">Lowest Price</option>
                            </Form.Select>
                        </Col>
                        <Col xs = {1} />
                    </Row>
                </Container> 
        </div>
    );
}