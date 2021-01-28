import React from 'react';
import CardBenefits from "./elements/CardBenefits";
import CardService from "./elements/CardService";

const Service = (props) => {

    const service = props.service
    const benefit = props.benefits

    const listBenefits = benefit.map((item) => <CardBenefits
        name={item.name}
        img={item.img}
        desc={item.desc}
        id={item.id}
    />);

    const listService = service.map((item) => <CardService
        name={item.name}
        price={item.price}
        id={item.id}
    />);

    return (
        <section id='service'>
            <div className="benefits">
                <h2 className='benefits__title font-italic bg-white p-2 mb-4 mt-4'>
                    Benefits
                </h2>
                <div className="benefits__list row m-0">
                    {
                        listBenefits
                    }
                </div>
            </div>


            <div className="service mt-5">
                <h2 className='service__title bg-white p-2 font-italic text-right'>
                    Service
                </h2>
                <div className="service__list row m-0 m-0">
                    {
                        listService
                    }
                </div>
            </div>
        </section>
    );
}

export default Service;