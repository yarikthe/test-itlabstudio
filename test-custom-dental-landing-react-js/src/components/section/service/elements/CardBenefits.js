import React from 'react';

const CardBenefits = (props) => {
    return (
        <div className="card-benefits col-md-4 com-sm-4 col-12 text-center" data-aos="zoom-in">
            <div className="card-benefits__body shadow p-3 mt-4">
                <img src={"/../../assets/img/icon/" + props.img } alt={props.img} className='card-benefits__img'/>
                <h4 className='card-benefits__title'>
                    {props.name} #{props.id}
                </h4>
                <p className='card-benefits__desc'>
                    {props.desc}
                </p>
            </div>
        </div>
    );
}

export default CardBenefits;