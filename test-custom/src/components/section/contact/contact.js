import React from 'react';

import CardContact from "./CardContact";

const Contact = (props) => {

    const contact = props.contact

    return (
        <section id='contact' className="contact">
            <div className="row m-0">
                <div className="conatct__left col-md-9  col-sm-12 col-12 footer-social-link">
                    <h2 className='conatct__left-title font-italic pt-5 text-right'>Contact</h2>
                    <div className="h-100 d-flex justify-content-center align-items-start pt-5">
                        <div className="col-md-6 text-left">
                            <div className="h-100 d-flex justify-content-start align-items-center">
                                <div className="contact__left-phone-email">
                                    <CardContact name={"phone"} value={contact.phone}/>
                                    <br/>
                                    <CardContact name={"email"} value={contact.email}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            {/*<h2 className='font-italic bg-transparent pt-5'>Contact</h2>*/}

                            <div className="h-100 d-flex justify-content-center align-items-center">
                                <div className="contact-work-schedule">
                                    <span className='text-secondary'>work-schedule</span>
                                    <CardContact name={""} value={contact.workSchedule.work}/>
                                    <CardContact name={""} value={contact.workSchedule.week}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="conatct__right col-md-3 col-sm-12 col-12 footer-copyright">

                   <div className='h-100 d-flex justify-content-center align-items-start pt-5'>
                       <div className="contact__right-address text-right">
                           <CardContact name={"address"} value={contact.address[0].address}/>
                           <br/>
                           <CardContact name={"address"} value={contact.address[1].address}/>
                       </div>
                   </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;