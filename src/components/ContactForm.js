import React, { useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(email.match(regex)) {
        mail.style.display = 'none';
        return true;
    } else {
        mail.style.display = 'block';
        mail.style.animation = 'dongle 1s';

        setTimeout (() => {
            mail.style.animation = 'none';
        }, 1000);
        return false;
    }
    }

    const failMessage = (message) => {
        let formMess = document.querySelector('.form-message');
        formMess.innerHTML = message;
        formMess.style.opacity = '1';

        document.querySelector('#nameLabel').classList.add('error');
        document.querySelector('#emailLabel').classList.add('error');
        document.querySelector('#messageLabel').classList.add('error');
    }

    const successMessage = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML = "Message envoyé ! Je reviens vers vous dès que possible."
        formMess.style.opacity = '1';
        formMess.style.color = '#fd3f92';

        document.querySelector('#nameLabel').classList.remove('error');
        document.querySelector('#emailLabel').classList.remove('error');
        document.querySelector('#messageLabel').classList.remove('error');
    
        setTimeout(() => {
            formMess.style.opacity = '0';
        }, 5000);

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(name && isEmail() && message) {

        sendFeedback("template_5zfhsti", {
            name,
            email,
            message,
            });
        } else {
            failMessage("Merci de remplir correctement les champs requis *");
        }
    }

    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send("service_zdvv0qo", templateId, variables)
            .then((res) => {
                successMessage();
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((err) => {
                failMessage("Une erreur s'est produite veuillez réessayer")
            } 
            )
    }

    return (
        <div className="contactForm">

            <form>

                <div className="form-group">

                    <label  id="nameLabel" htmlFor="name">Votre nom*
                    <input type="text" id="name"
                    name="name" value={name}
                    onChange={event => setName(event.target.value)}
                    />
                    </label>

                </div>

                <div className="form-group">

                    <p id="not-mail">Email erroné</p>
                    <label id="emailLabel" htmlFor="email">Votre email*
                    <input type="text" id="email"
                    email="email" value={email}
                    onChange={event => setEmail(event.target.value)}
                    />
                    </label>

                </div>

                <div className="form-group">

                    <label id="messageLabel" htmlFor="message">Votre message*
                    <textarea type="text" id="message"
                    message="message" value={message}
                    onChange={event => setMessage(event.target.value)}
                    />
                    </label>

                </div>

                <button type="submit"onClick={handleSubmit}>Envoi</button>

                <div className="form-message"></div>

            </form>
            
        </div>
    );
};

export default ContactForm;