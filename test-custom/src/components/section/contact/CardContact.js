import React from 'react';

const CardContact = (props) => {
    return (
       <div className='card-conatct font-italic'>
           <span className='text-secondary' data-aos="zoom-in-down">{props.name}</span>
           <br/>
           <span className='card-contact__value' data-aos="zoom-in-down">{props.value}</span>
       </div>
    );
}

export default CardContact;