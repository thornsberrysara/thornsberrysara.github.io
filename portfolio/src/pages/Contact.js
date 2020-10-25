import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
        <h3>contact</h3>
        <ul className="contact-links">
            <li className="contact-link"><i className="fab fa-github"></i></li>
            <li className="contact-link"><i className="fab fa-behance-square"></i></li>
            <li className="contact-link"><i className="fab fa-linkedin"></i></li>
            <li className="contact-link"><i className="far fa-envelope"></i></li>
            <li className="contact-link"><i className="far fa-file"></i></li>
        </ul>
    </>
    );
}

export default Contact;