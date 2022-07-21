import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ItemList from './ItemList';

export default function Cart() {
    let location = useLocation();

    if (location.state != null) {
        const { cardImg } = location.state;
        const { cardName } = location.state;
        const { cardDsc } = location.state;
        const { cardPrice } = location.state;

        return (
            <div>
                <Container>
                    <Row>
                        <h4 className="centerText py-3">This is your wishlist!</h4>
                    </Row>
                    <Row>
                        <ItemList name={cardName} dsc={cardDsc} price={cardPrice} />
                    </Row>
                </Container>

            </div>
        );
    }

    return (
        <div>
            <Container>
                <Row>
                    <h4 className="centerText py-3">This is your wishlist!</h4>
                </Row>
            </Container>

        </div>
    );
}