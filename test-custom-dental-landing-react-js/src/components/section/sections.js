import React from 'react';

import About from "./about";
import Service from "./service/service";
import Contact from "./contact/contact";

const Sections = (props) => {
    return (
        <div className="container-fluid p-0 m-0">

            <About about={props.state.about}/>

            <Service
                service={props.state.service}
                benefits={props.state.benefits}
            />

            <Contact contact={props.state.contacts}/>
        </div>
    );
}

export default Sections;
