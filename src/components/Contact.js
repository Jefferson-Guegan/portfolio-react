import React from 'react';
import ContactInfo from './ContactInfo';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';


const Contact = () => {
    return (
        <div id="contactSection">

            <div className="container">

                <div className="section-title">

                    <p>rencontrons-nous</p>
                    <h2>Contact</h2>

                </div>

                <div className="contactSection-wrapper">

                    <div className="left-contact">
                        <ContactInfo icon= {faPhone}text="07 82 74 96 66"/>
                        <ContactInfo icon={faAt} text ="guegan.jefferson@gmail.com"/>
                        <ContactInfo  icon={faAddressCard}text="Dordogne, France"/>
                    </div>

                    <div className="right-contact">

                        <ContactForm/>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Contact;