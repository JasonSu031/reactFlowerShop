import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import StoreNav from './StoreNav';
import Profile from './Profile';
import Home from '../HomePage/Home';
import Search from '../SearchPage/Search';
import Design from '../DesignPage/Design';
import Contact from '../ContactPage/Contact';

export default function Navigation() {
    return (
        <div>
            <Router>
                <Container fluid className = "bg-light my-3">
                    <Row>
                        <Col xs={2}/>
                        <Col xs={8}>
                            <StoreNav/>
                        </Col>
                        <Col xs={2}>
                            <Profile/>
                        </Col>
                    </Row>
                </Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="design" element={<Design />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>

    );
}
