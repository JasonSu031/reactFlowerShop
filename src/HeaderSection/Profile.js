import { Link } from 'react-router-dom';
import {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { PersonFill, Translate, CartFill } from 'react-bootstrap-icons';
import './Profile.css';

export default function Profile() {
    const [language, setLanguage] = useState('EN');

    const handleClick=(e, lang)=>{
        setLanguage(lang);
    }

    return (
        <div className="d-flex justify-content-end mt-2 ">
            <Dropdown className="pt-1">
                <Dropdown.Toggle variant="bg-light" id="dropdown-basic">
                    {language}
                </Dropdown.Toggle>
                <Dropdown.Menu  >
                    <Dropdown.Item as={Link} to="/reactFlowerShop/" state = {{language:"english"}} onClick={e=>handleClick(e,"EN")}>English</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/reactFlowerShop/" state = {{language:"french"}} onClick={e=>handleClick(e,"FR")}>Français (Home page)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Link to="/reactFlowerShop/cart" className="text-decoration-none">
                <Button variant="light" className="py-2 d-block mx-auto"><CartFill className="larger2" /></Button>
            </Link>

            <Dropdown className="me-3">
                <Dropdown.Toggle variant="bg-light" id="dropdown-basic">
                    <PersonFill className="larger1" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/reactFlowerShop/login">Login</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/reactFlowerShop/signup">Sign Up</Dropdown.Item>
                </Dropdown.Menu>

            </Dropdown>
        </div>
    );
}