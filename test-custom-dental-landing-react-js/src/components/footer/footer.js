import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <div className="row m-0">
                <div className="col-md-9  col-sm-12 col-12 footer-social-link">
                   <div className="text-md-left pt-2 pb-2 text-center">
                       {
                           props.links.map((link) => {
                               return(
                                   <a href={link.link} target="_blank" className=''>{link.name} </a>
                               )
                           })
                       }
                   </div>
                </div>

                <div className="col-md-3 col-sm-12 col-12 footer-copyright">
                    <div className="text-center pt-2 pb-2 text-md-right">
                        <span className="text-white">
                            © 2021. Dental "Teeth"
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
