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
                    <Route path="/reactFlowerShop/" element={<Home />} />
                    <Route path="/reactFlowerShop/search" element={<Search />} />
                    <Route path="/reactFlowerShop/design" element={<Design />} />
                    <Route path="/reactFlowerShop/contact" element={<Contact />} />
                    <Route path="/reactFlowerShop/cart" element={<Cart />} />
                    <Route path="/reactFlowerShop/login" element={<Login />} />
                    <Route path="/reactFlowerShop/signup" element={<SignUp/>} />
                    <Route path="/reactFlowerShop/details" element={<Detail/>} />
                    <Route path="/reactFlowerShop/wishlist" element={<Cart/>} />
                    <Route path = "/reactFlowerShop/success" element = {<Success/>}/>
                </Routes>
            </Router>
        </div>

    );
}
