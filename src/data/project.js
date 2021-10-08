import { v4 as uuidv4 } from 'uuid';
import Project1 from '../media/project1.png';
import Project2 from '../media/project2.png';
import Project3 from '../media/project3.png';
import Project4 from '../media/project4.png';
import Project5 from '../media/project5.png';

const projects = [
    {
      id: uuidv4(),
      name: 'Bordeaux Métropole',
      desc:
        "Projet réalisé lors du premier mois de formation à la Wild Code School, il s\'agit d\'un site vitrine principalement développé en HTML/CSS avec quelques fonctionnalités en Javascript. Ce projet a été réalisé grace en groupe de 3 développeurs.L'objectif était de produire un site fonctionnel et élégant en ne traitant que la partie Front-End.",
      img: Project1,
      url:"https://jefferson-guegan.github.io/Bordeaux/index.html",
    },
    {
      id: uuidv4(),
      name: 'Battle Changer',
      desc:
        'Projet réalisé dans le cadre d\'un Hackathon de 24h en équipe de trois dévelopeur et dont le thème était : Grâce à React, propulsez la technologie actuelle à une ère historique de votre choix. Nous avons opté pour une application type encyclopédique pour l\'ensemble du Moyen-âge en s\'inspirant de l\'API AOE2',
      img: Project2,
      url:"https://jefferson-guegan.github.io/Battle-Changer/",
    },
    {
      id: uuidv4(),
      name: 'Site CV',
      desc:
        'Application Web multi-pages développée en React avec une navigation simple se caractérise par une utilisation de méthodes telles que .map et .filter. Bien que son désign soit 100% en CSS, ce site-cv est s\'est inspiré d\'un tutoriel utilisant le Sass. L\'application se veut simple, responsive et rapide. Le formulaire de contact utilise EmailJS',
      img: Project3,
      url:"https://jefferson-guegan.github.io/react-cv/",
    },
    {
      id: uuidv4(),
      name: "OsLink",
      desc:
        'Projet réalisé par une équipe de 3 développeurs dans le cadre de la Wild Code School. Il s\agit d\'une plateforme de mise en relation de développeurs à la recherche de projet OpenSource à développer avec des associations ayant des besoins de développement. Le projet est en cours de développement, le lien amène sur le repo Github.',
      img: Project4,
      url:"https://github.com/MaximeKirch/osLink",
    },
    {
      id: uuidv4(),
      name: 'OpenFood',
      desc:
        'Application utilisant l\'API Openfood, elle est, à l\'origine un exercice d\'intégration d\'API, proposé dans le cadre de ma formation à la Wild Code School. Cet exercice a pour mérite de mettre en valeur deux savoir-faire important : passer des informations au travers d\'une URL et de gérer l\'aspect asynchorne d\'un fetch. ',
      img: Project5,
      url:"https://jefferson-guegan.github.io/openfood/",
    },
  ];
  
  export default projects;
  