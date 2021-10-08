import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import experiences from '../data/experiences';

const Experience = () => {

        const [activeIndex, setActiveIndex]= useState(0);
        const activeSlide = experiences[activeIndex];

        const handlePrev = () => {
            if (activeIndex <= 0) {
                setActiveIndex(experiences.length -1);
            } else {
                setActiveIndex((currentIndex) => currentIndex -1);
            }
        }

        const handleNext = () => {
            if (activeIndex >= experiences.length -1) {
                setActiveIndex(0);
            } else {
                setActiveIndex((currentIndex) => currentIndex +1);
            }
        }

    return (
        <div id="experienceSection">

            <div className="container">

                <div className="section-title">

                    <p>découvrez un bout de mon parcours</p>
                    <h2>Mon expérience</h2>

                </div>

                <div className="experience-wrapper">

                    <SwitchTransition>

                        <CSSTransition
                        key={activeSlide.id}
                        timeout={300}
                        classNames="fade">

                            <div className="experience-info">

                                <div className="experience-desc">

                                    <p>{activeSlide.desc}</p>

                                </div>

                                <h2 className="experience-name">{activeSlide.name}</h2>

                                <p className="experience-date">{activeSlide.date}, <br/>{activeSlide.org}</p>

                            </div>

                        </CSSTransition>

                    </SwitchTransition>

                </div>

                <div className="arrows">
                    
                    <div className="prev"
                    onClick={handlePrev}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handlePrev}
                    >

                        <FontAwesomeIcon icon={faArrowLeft}/>

                    </div>

                    <div className="next"
                    onClick={handleNext}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handleNext}
                    >

                        <FontAwesomeIcon icon={faArrowRight}/>

                    </div>
                </div>
            
            </div>

        </div>
    );
};

export default Experience;