import {faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div id="footerSection">
            <div className="container">

                <div className="footer-col1">

                    <h2>Jefferson GUEGAN</h2>

                    <p>Aficionado de casse-tête, prenant du plaisir dans l'apprentissage, j'ai trouvé ma place dans le développement web ; 
                        résoudre des problèmes, acquérir chaque jour de nouvelles connaissances, 
                        se remettre en question en permanence, progresser sans cesse, voici la voie que je me suis choisi. 
                        Curieux, rigoureux, autodidacte, autonome et enthousiaste, je suis sans cesse à la recherche de challenges, 
                        de défis et de nouveaux apprentissages. 
                        Passionné du code, je me suis spécialisé dans les technologies Front-End.
                    </p>

                </div>

                <div className="footer-col2">

                    <h2>Sections importantes</h2>
                    <ul>
                        <li><a href="#aboutSection">Bio</a></li>
                        <li><a href="#portfolioSection">Portfolio</a></li>
                        <li><a href="#contactSection">Contact</a></li>
                    </ul>

                </div>

                <div className="footer-col3">

                    <h2>Coordonnées</h2>
                    <ul>
                        <li>07 82 74 96 66</li>
                        <li>guegan.jefferson@gmail.com</li>
                    </ul>

                </div>

                <div className="footer-col4">

                    <h2>Réseaux sociaux</h2>
                    <ul>
                        <li><a href="https://github.com/Jefferson-Guegan" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/jefferson-guegan-403753217/" target="_blank">Linkedin</a></li>
                        <li><a href="https://twitter.com/Rural_Coder" target="_blank">Twitter</a></li>
                    </ul>

                </div>

            </div>
        
            <div className="copyright">

                <div className="copyright-container">

                    <p>
                        <FontAwesomeIcon icon={faCopyright}/> 2021 - Jefferson Guegan
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Footer;