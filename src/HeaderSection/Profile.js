import { NavLink, Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
import { PersonFill } from 'react-bootstrap-icons';

import './Profile.css';
import cart from '../assets/cart.png';

export default function Profile() {
    return (
        <div className="d-flex justify-content-end py-1 mt-2 ">
            <NavLink to="cart" className="d-flex justify-content-end">
                <img src={cart} className="larger2 mt-2 me-3" />
            </NavLink>

            <Dropdown className="me-4">
                <Dropdown.Toggle variant="bg-light" id="dropdown-basic">
                    <PersonFill className="larger1" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="login">Login</Dropdown.Item>
                    <Dropdown.Item as={Link} to="signup">Sign Up</Dropdown.Item>
                </Dropdown.Menu>
                
            </Dropdown>
        </div>
    );
}