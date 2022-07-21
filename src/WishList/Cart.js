import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ItemList from './ItemList';

export default function Cart(){
    return(
        <div>
            <Container>
                <Row>
                    <h4 className = "centerText py-3">This is your wishlist!</h4>
                </Row>
                <Row>
                    <ItemList/>
                </Row>
            </Container>

        </div>
    );
}