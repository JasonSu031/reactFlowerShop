import Navbar from 'react-bootstrap/Navbar';
import Home from '../HomePage/Home';
import Search from '../SearchPage/Search';
import Design from '../DesignPage/Design';
import Contact from '../ContactPage/Contact';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';

export default function Navigation() {
    return (
        <div className="my-3">
            <Router>
                <Navbar className="navbar bg-light justify-content-center">
                    <div className="nav">
                        <ul className="navbar-nav lead">
                            <NavLink className="nav-item  mx-3 text-decoration-none h4"
                                to="home"
                                style={({ isActive }) => ({
                                    color: isActive ? '#000000' : '#838383',
                                    //fontWeight: isActive? 'bold':'normal',
                                })}
                            >
                                Home
                            </NavLink>
                            <NavLink className="nav-item  mx-3 text-decoration-none h4"
                                to="search"
                                style={({ isActive }) => ({
                                    color: isActive ? '#000000' : '#838383',
                                })}
                            >
                                Search
                            </NavLink>
                            <NavLink className="nav-item  mx-3 text-decoration-none h4"
                                to="design"
                                style={({ isActive }) => ({
                                    color: isActive ? '#000000' : '#838383',
                                })}
                            >
                                Design
                            </NavLink>
                            <NavLink className="nav-item  mx-3 text-decoration-none h4"
                                to="contact"
                                style={({ isActive }) => ({
                                    color: isActive ? '#000000' : '#838383',
                                })}
                            >
                                Contact
                            </NavLink>
                        </ul>
                    </div>
                </Navbar>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="design" element={<Design />} />
                    <Route path="contact" element={<Contact/>} />
                </Routes>
            </Router>
        </div>

    );
}
