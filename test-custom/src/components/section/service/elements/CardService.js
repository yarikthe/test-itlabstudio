import React from 'react';

const CardService = (props) => {
    return (
        <div className="card-service m-0 col-md-6 col-sm-6 col-12" data-aos="flip-left">
            <div className="card-service__body p-4 m-1">

                    <div className="card-service__body-title">
                        <h4 className='text-white'>{props.name}</h4>
                    </div>
                    <div className="card-service__body-price">
                        <span>${props.price}</span>
                    </div>
                    <div className="card-service__body-link pt-5">
                        <a href="#" className='text-white font-italic'>Learn more</a>
                    </div>

            </div>
        </div>
    );
}

export default CardService;