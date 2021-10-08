import React from 'react';
import SectionTitle from './SectionTitle';
import AboutImg from '../media/about-page-img.jpg';
import CV from '../media/jeffersonguegan.pdf';


const About = () => {
    return (
        <div id="aboutSection">
            <div className="container">

                <div className="aboutSection-left">
                    <SectionTitle/>
                    <p>Passionné d'informatique depuis ma plus tendre enfance et mes premiers pas en Omikron Basic,
                    j'ai entamé un reconversion en tant que développeur Web après un début de carrière riche et varié.
                    Jamais las d'apprendre, j'apprécie le développement dans ce qu'il propose en apprentissage constant
                    et en challenges quotidiens. Adepte de beaux sites et du beau code, j'essaie de progresser sans cesse dans l'art de 
                    coder afin de proposer des applications esthétiques, propres, accessibles et SEO-Friendly.
                    </p>
                    
                    <div className="aboutSection-buttons">

                        <a href="#portfolioSection" className="btn-works">Mes travaux</a>
                        <a href={CV} target="_blank" className="btn-cv">Mon CV</a>
                    
                    </div>
                </div>
            <div className="aboutSection-right">
                <img src={AboutImg} alt=""/>
            </div>
            </div>
            
        </div>
    );
};

export default About;