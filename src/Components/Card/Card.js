import React from 'react';
import Nameselary from '../Nameselary/Nameselary';
import './Card.css'

const Card = (props) => {
    const card = props.Card;
    const totalCard = card.reduce((total, product) => total + product.selary, 0);
    return (
        <div className='select'>
            <h3>Total Selected Id: {card.length}</h3>
            {
                card.map(card => <Nameselary card={card} ></Nameselary>)
            }
            <h3>Total Selary: ${totalCard}</h3>
        </div>
    );
};

export default Card;