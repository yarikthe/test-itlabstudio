import React from 'react';
import {Button, Container} from "react-bootstrap";

const Promo = () => {
    return (
        <div className="promo mt-5">

                <h1>
                    Dental "Teeth"
                </h1>
                <p>
                    We make your life better!
                </p>

                <div className="promo-links">
                    <Button className='shadow promo-links__get btn-promo col-12 col-md-2' data-aos='fade-up'>Get</Button>
                    <a href="#" className='promo-links__learn-more p-4 font-italic' data-aos='fade-up'>Learn more</a>
                </div>


        </div>
    );
}

export default Promo;
