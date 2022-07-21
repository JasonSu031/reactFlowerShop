import React from 'react';
import {useLocation} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImageDetails from './ImageDetails';
import DetailSplit from './DetailSplit';
import InfoDetails from './InfoDetails';

import './Detail.css';

export default function Detail(){

    const location = useLocation();
    const {cardImg} = location.state;
    
    return(
        <div>
            <h5 className = "centerText py-2">Flower Information</h5>
            <Container className = "my-4">
                <Row>
                    <Col xs = {1}></Col>
                    <Col xs = {9} className ="border"> 
                        <DetailSplit left = {<ImageDetails cardImg = {cardImg}/>} right = {<InfoDetails />}/>
                        
                    </Col>
                    <Col xs = {2}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}