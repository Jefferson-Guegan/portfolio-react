import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';


const Techno = () => {
    return (
        <div id="technoSection">

            <div className="container">

            <div className="section-title">
            
                <p>Quelles sont les technos que j'utilise ?</p>
                <h2>Mes compétences</h2>
            
            </div>

            <div className="techno-text">

                <div className="techno-block">

                <div>
                    <FontAwesomeIcon icon={faHtml5}/>
                    <FontAwesomeIcon icon={faCss3}/>
                </div>
                
                <p>Si HTML et CSS ne sont pas des langages de programmation à proprement
                    parler, leur maîtrise n'en demeure pas moins essentielle. Au-delà de la structuration
                    et de l'esthétique de l'application, leur bonne utilisation garantit deux points
                    cruciaux à mes yeux : l'accessibilité et le référencement (SEO).
                </p>

                </div>

                <div className="techno-block">

                <div>
            
                    <FontAwesomeIcon icon={faJs}/>
            
                </div>
                
                <p>Langage populaire et incontournable, j'apprécie le Javascript pour sa flexibilité. Grâce à ses nombreux frameworks
                    il permet de pouvoir répondre à de très nombreuses problématiques. Il offre de vastes opportunités 
                    et oblige les développeurs à sans cesse apprendre. Toutefois, si j'aime coder en JS, je reste ouvert à d'autres technologies.
                </p>

                </div>

                <div className="techno-block">

                <div>
            
                    <FontAwesomeIcon icon={faReact}/>
                
                </div>

                <p>J'apprécie React pour sa simplicité (code déclaratif, DOM virtuel), son efficacité (1 outil = 1 fonction) et sa versatilité. L'écosystème autour de React
                    permet d'avoir accès à de nombreuses boîtes à outils (Bootstrap, MaterialUI et bien d'autres). Sa réactivité permet de développer 
                    des applications rapides et efficaces. Néanmoins, je reste ouvert à d'autres frameworks basés sur le Javascript ou non.
                </p>

            </div>
            
            </div>

            </div>

        </div>
    );
};

export default Techno;