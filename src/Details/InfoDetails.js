import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './InfoDetails.css';

export default function InfoDetails({image, name, dsc, price }) {
    return (
        <div className="m-3 my-5">
            <Container>
                <Row>
                    <div className="centerText h5 mb-4">Name: {name}</div>
                </Row>
                
                <Row>
                    <div className="centerText mt-4 mb-4"><p>{dsc}</p></div>
                </Row>

                <Row>
                    <div className="h6">
                        <p className=" bg-light p-3 infoRight mb-4">Price: {price}</p>
                    </div>
                </Row>
                <Row>
                    <Link to = "/reactFlowerShop/wishlist" className = "text-decoration-none"  state = {{cardImg:image, cardName:name, cardDsc:dsc, cardPrice:price}}>
                        <Button variant = "success" className = "wishStyle mx-auto d-block my-4">Add to WishList</Button>
                    </Link>
                </Row>
            </Container>

        </div>
    );
}