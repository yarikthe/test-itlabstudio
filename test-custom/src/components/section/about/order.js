import React from 'react';

const Order = (props) => {
    return (
        <div className="order-form bg-white p-3">
            <form action="">
                <input type="text" className='order-form__name col-md-4 col-sm-4  col-12 m-1' placeholder='Name'/>
                <input type="tel" className='order-form__phone col-md-4 col-sm-4 col-12 m-1' placeholder='Phone'/>
                <button className='order-form__btn-order col-12 col-md-3 col-sm-3 m-1 btn-promo'>Order</button>
            </form>
        </div>
    );
}

export default Order;
