import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContactInfo = (props) => {

    return (
        <div className="contact-info">

            <div className="icon-info">

                <FontAwesomeIcon className= "icon-style"icon={props.icon}/>

            </div>

            <div className="infos">

                {props.text}

            </div>

        </div>
    );
};

export default ContactInfo;