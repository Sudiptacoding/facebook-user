import React from 'react';
import './Nameselary.css';

const Nameselary = (props) => {
    const { name, img, selary } = props.card;
    console.log(props.card);
    return (
        <div className='Cd-profile'>
            <div><img src={img} alt="" /></div>
            <div className='Cd-sec'>
                <p>Name: {name}</p>
                <h5>Selary: ${selary}</h5>
            </div>
        </div>
    );
};

export default Nameselary;