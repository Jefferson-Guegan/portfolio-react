import React from 'react';
import Project5 from '../media/project5.png';

const ProjectItem = (props) => {

    const {item} = props;


    return (
        <div className="project-item">

            <div className="project-itemImg">  
            <img src={item.img} alt="Projet"/>
            </div> 

            <div className="project-itemInfos">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank">Voir le site</a>
            </div> 

        </div>
    );
};

export default ProjectItem;