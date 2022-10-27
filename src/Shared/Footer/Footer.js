import React from 'react';
import { Link } from 'react-router-dom';
import"./Footer.css"

const Footer = () => {
    return (
        <div>
          

 <footer className="page-footer font-small blue pt-4 ">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Job Preparation</h5>
                <p>Here You can prepare yourself for Government Job</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3 services">
                <h5 className="text-uppercase">Our services Services</h5>
                <ul className="list-unstyled">
                    <li><Link to='/courses'>Career Guide Line</Link></li>
                    <li><Link to='/courses'>Bcs Preparation</Link></li>
                    <li><Link to='/courses'>Primary Preparation</Link></li>
                    <li><Link to='/courses'>Others Job Preparation</Link></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Company</h5>
                <ul className="list-unstyled">
                    <li><Link to='/'>About </Link></li>
                    <li><Link to='/'>Contact</Link></li>
                    <li><Link to='/'>Marketing</Link></li>
                    <li><Link to='/'>Awards</Link></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <Link>  Job Preparation</Link>
    </div>

</footer>


        </div>
    );
};

export default Footer;