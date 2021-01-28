import React from 'react';

import Order from "./order";

const About = (props) => {
    return (
        <section id='about' className="text-center">
           <h2 className='font-italic bg-white p-2 shadow'>
               About
           </h2>
            <div className="about ">

                <p className='text-md-left text-center text-white'>
                    {
                        props.about.desc
                    }
                </p>
            </div>
            <Order />
        </section>
    );
}

export default About;
