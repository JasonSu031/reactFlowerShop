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
import Cart from '../Wishlist/Cart';
import Login from '../Profile/Login';
import SignUp from '../Profile/SignUp';
import Detail from '../Details/Detail';
import Success from '../Profile/Success';

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
                    <Route path="/search" element={<Search />} />
                    <Route path="/design" element={<Design />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/details" element={<Detail/>} />
                    <Route path="/wishlist" element={<Cart/>} />
                    <Route path = "/success" element = {<Success/>}/>
                </Routes>
            </Router>
        </div>

    );
}
