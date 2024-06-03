// src/components/Projects.js
import { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import config from '../../data/index.json';
import Popup from '../Popup';
import truncateText from '../../utils/truncateText';

const Projects = () => {
  const projects = config.projects;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState({});

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleDescription = (index, type) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [`${type}-${index}`]: !prevState[`${type}-${index}`],
    }));
  };

  const getDescription = (description, index, type) => {
    const isFullDescriptionShown = showFullDescription[`${type}-${index}`];
    const truncatedDescription = truncateText(description, 37);
    return (
      <p className="mt-6">
        <span>
          {isFullDescriptionShown ? description : truncatedDescription}
          <button
            className="text-blue-500 ml-2 dark:text-blue-300"
            onClick={() => toggleDescription(index, type)}
          >
            {isFullDescriptionShown ? 'Voir moins' : 'Voir plus'}
          </button>
        </span>
      </p>
    );
  };

  return (
    <div id="projets" className="projects px-8 lg:px-16 pb-16 text-background">
      <h1 className="pt-20 mb-12 uppercase font-bold text-center text-4xl font-kanit">
        {projects.title}
      </h1>
      <div className="flex justify-center">
        <p className="custom-width text-justify mb-12 font-mono">{projects.description}</p>
      </div>
      <div className="projects__menu ">
        <ul>
          {projects.formationProjects.map((item, index) => (
            <li key={item.title} className="flex flex-col lg:flex-row mt-12 justify-center font-mono">
              <div className="lg:w-1/3">
                <h2 className="text-2xl font-kanit">{item.title}</h2>
                <div className='font-mono text-justify'>{getDescription(item.description, index, 'formation')}</div>
                <div className="flex mt-4 ">
                  <div className="text-center font-semibold p-0.5 gradient-background">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup(); }} rel="noreferrer">
                      <div className="text-background">
                        <span className="block py-0.5 px-2 gradient-text cursor-not-allowed">
                          Voir le Projet
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="ml-2 font-semibold">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup(); }} rel="noreferrer">
                      <span className="block py-1 px-2 gradient-text cursor-not-allowed">
                        Code Source
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-flex flex flex-col">
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image2}
                      alt={item.alt2}
                      className="mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image3}
                      alt={item.alt3}
                      className="mt-6 md:mt-12 lg:mt-0 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h1 className="pt-12 mb-12 uppercase font-bold text-center text-4xl font-kanit">
        {projects.title2}
      </h1>
      <div className="flex justify-center">
        <p className="custom-width text-justify mb-12 font-mono">{projects.description2}</p>
      </div>

      <div className="projects__menu">
        <ul>
          {projects.apotheoseProjects.map((item, index) => (
            <li key={item.title} className="flex flex-col lg:flex-row mt-12 justify-center font-mono">
              <div className="lg:w-1/3">
                <h2 className="text-2xl dark:text-white font-kanit">{item.title}</h2>
                <div className='font-mono text-justify'>{getDescription(item.description, index, 'apotheose')}</div>
                <div className="flex mt-4">
                  <div className="text-center font-semibold p-0.5 gradient-background">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <div className="text-background">
                        <span className="block py-0.5 px-2 gradient-text">
                          Voir le Projet
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="ml-2 font-semibold">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup(); }} rel="noreferrer">
                      <span className="block py-1 px-2 bg-white gradient-text cursor-not-allowed">
                        Code Source
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-flex flex flex-col">
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image2}
                      alt={item.alt2}
                      className="mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image3}
                      alt={item.alt3}
                      className="mt-6 md:mt-12 lg:mt-0 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <p className='font-mono'>Cette fonctionnalité n&apos;est pas disponible pour le moment.</p>
      </Popup>
    </div>
  );
};

export default Projects;
