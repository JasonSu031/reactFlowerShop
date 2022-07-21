import { NavLink, Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
import { PersonFill } from 'react-bootstrap-icons';

import './Profile.css';

export default function Profile() {
    const cart = "/assets/cart.png";
    return (
        <div className="d-flex justify-content-end mt-2 ">
            <NavLink to="cart" className="d-flex justify-content-end">
                <img src={process.env.PUBLIC_URL + `${cart}`} className="larger2 my-2 me-3" />
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