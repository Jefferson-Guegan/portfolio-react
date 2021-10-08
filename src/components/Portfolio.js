import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import projects from '../data/project';
import ProjectItem from './ProjectItem';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const Portfolio = () => {
    return (
        <div id="portfolioSection">

            <div className="container">

                <div className="section-title">

                    <p>quelques-un des mes récents travaux</p>
                    <h2>Mon portfolio</h2>

                </div>

                <div className="projects-items">

                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        breakpoints={
                            {
                                // quand la largeur d'écran est >=100 alors j'ai 1 slide
                                100: {
                                    slidesPerView: 1,
                                },

                                // quand la largeur d'écran est >=768 alors j'ai 2 slides

                                768: {
                                    slidesPerview: 2,
                                },

                                // quand la largeur d'écran est >=1200 alors j'ai 3 slides

                                1200: {
                                    slidesPerView: 3,
                                },
                            }
                        }
                    >

                       {projects.map((project,index) => {
                           if(index >=5) return;
                           return (
                               <SwiperSlide key={project.id}>
                                <ProjectItem 
                                    item={project}
                                />
                               </SwiperSlide>
                           )
                       })} 

                    </Swiper>



                </div>

            </div>
            
        </div>
    );
};

export default Portfolio;