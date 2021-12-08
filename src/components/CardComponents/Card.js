import React from 'react';
import './Card.css'
import photo from './img/menu.png';
import { Card, Button } from 'react-bootstrap'

const CardComponent = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
                <Card.Title>Форель с булгуром</Card.Title>
                <Card.Text>
                    Описание продукта, особенности, плюсы и минусы.
                </Card.Text>
                <div className='btn-group-my'>
                    <div>
                        <span className='my_span'>1000 сом</span>
                    </div>
                    <div>
                        <span className='my_span'>-</span>
                        <span className='my_span'>1</span>
                        <span className='my_span'>+</span>
                    </div>
                    <Button variant="primary">В корзину</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;