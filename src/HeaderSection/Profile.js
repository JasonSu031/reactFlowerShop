import Dropdown from 'react-bootstrap/Dropdown';
import { PersonFill } from 'react-bootstrap-icons';
import {CartFill} from 'react-bootstrap-icons';
import './Profile.css';

export default function Profile() {
    return (
        <div className="d-flex justify-content-end py-1 mt-2 ">
            <CartFill className="larger2 py-1 me-3"/>
            <Dropdown className = "me-2">
                <Dropdown.Toggle variant = "bg-light" id="dropdown-basic">
                    <PersonFill className="larger1" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Sign Up</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}