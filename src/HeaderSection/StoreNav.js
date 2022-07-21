import Navbar from 'react-bootstrap/Navbar';
import {
    NavLink,
} from 'react-router-dom';

export default function StoreNav() {
    return (
        <div>
            <Navbar className="navbar justify-content-center py-3">
                <div className="nav">
                    <ul className="navbar-nav lead">
                        <NavLink className="nav-item  mx-3 text-decoration-none h4"
                            to="/reactFlowerShop/"
                            style={({ isActive }) => ({
                                color: isActive ? '#000000' : '#838383',
                                //fontWeight: isActive? 'bold':'normal',
                            })}
                        >
                            Home
                        </NavLink>
                        <NavLink className="nav-item  mx-3 text-decoration-none h4"
                            to="/reactFlowerShop/search"
                            style={({ isActive }) => ({
                                color: isActive ? '#000000' : '#838383',
                            })}
                        >
                            Search
                        </NavLink>
                        <NavLink className="nav-item  mx-3 text-decoration-none h4"
                            to="/reactFlowerShop/design"
                            style={({ isActive }) => ({
                                color: isActive ? '#000000' : '#838383',
                            })}
                        >
                            Design
                        </NavLink>
                        <NavLink className="nav-item  mx-3 text-decoration-none h4"
                            to="/reactFlowerShop/contact"
                            style={({ isActive }) => ({
                                color: isActive ? '#000000' : '#838383',
                            })}
                        >
                            Contact
                        </NavLink>
                    </ul>
                </div>
            </Navbar>
        </div>
    );
}