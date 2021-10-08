import React from 'react';
import Typed from 'react-typed';
import SocialMediaArrow from '../media/social-media-arrow.svg';
import ScrollDownArrow from '../media/scroll-down-arrow.svg';
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Jefferson Guegan - Développeur</h1>
                <Typed
                    className="typed-text"
                    strings={["Web", "Javascript", "React", "Front-End"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#portfolioSection" className="btn-contact">Découvrez mon travail</a>
            </div>
            <div className="header-social">
                <div className="header-social-indicator">
                    <p>Me suivre</p>
                    <img src={SocialMediaArrow} alt="flèche"/>
                </div>
                <div className="header-social-text">
                    <ul>
                        <li>
                            <a href="https://twitter.com/Rural_Coder" target="_blank" rel="noreferrer">
                                TW 
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jefferson-guegan-403753217/" target="_blank" rel="noreferrer">
                                LI 
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Jefferson-Guegan" target="_blank" rel="noreferrer">
                                GH 
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="header-scrollDown">
                <p>Scroll</p>
                <img src={ScrollDownArrow} alt="flèche"/>
            </div>
        </div>
    );
};

export default Header;