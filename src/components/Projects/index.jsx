import { useState } from 'react';
import config from '../../data/index.json';
import Popup from '../Popup';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Projects = () => {
  const projects = config.projects;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div id="projets" className="px-8 md:px-16 pb-16 bg-white">
      <h1 className="pt-12 mb-12 uppercase font-bold text-center text-black text-4xl">
        {projects.title}
      </h1>
      <div className="flex justify-center">
        <p className="custom-width text-center mb-12">{projects.description}</p>
      </div>
      <div className="projects__menu">
        <ul>
          {projects.formationProjects.map((item) => (
            <li key={item.title} className="flex flex-col lg:flex-row mt-12 justify-center">
              <div className="lg:w-1/3">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="mt-6">{item.description}</p>
                <div className="flex mt-4">
                  <div className="text-md text-center font-semibold p-0.5 bg-gradient-to-r from-blue-400 via-lime-500 to-orange-500">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup(); }} rel="noreferrer">
                      <div className="bg-white">
                        <span className="block py-0.5 px-2 bg-white bg-gradient-to-r from-blue-400 via-lime-500 to-orange-500 bg-clip-text text-transparent">
                          Voir le Projet
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="bg-white ml-2 font-semibold">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup(); }} rel="noreferrer">
                      <span className="block py-1 px-2 bg-white bg-gradient-to-r from-blue-400 via-lime-500 to-orange-500 bg-clip-text text-transparent">
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
                      className="mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image2}
                      alt={item.alt2}
                      className="mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image3}
                      alt={item.alt3}
                      className="mt-6 md:mt-12 lg:mt-0 custom-shadow h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h1 className="pt-12 mb-12 uppercase font-bold text-center text-black text-4xl">
        {projects.title2}
      </h1>
      <div className="flex justify-center">
        <p className="custom-width text-center mb-12">{projects.description2}</p>
      </div>

      <div className="projects__menu">
        <ul>
          {projects.apotheoseProjects.map((item) => (
            <li key={item.title} className="flex flex-col lg:flex-row mt-12 justify-center">
              <div className="lg:w-1/3">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="mt-6">{item.description}</p>
                <div className="flex mt-4">
                  <div className="text-md text-center font-semibold p-0.5 bg-gradient-to-r from-blue-400 via-lime-500 to-orange-500">
                    <a href={item.url} target="_blank" rel="noreferrer">
                      <div className="bg-white">
                        <span className="block py-0.5 px-2 bg-white bg-gradient-to-r from-blue-400 via-lime-500 to-orange-500 bg-clip-text text-transparent">
                          Voir le Projet
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="bg-white ml-2 font-semibold">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup(); }} rel="noreferrer">
                      <span className="block py-1 px-2 bg-white bg-gradient-to-r from-blue-400 via-lime-500 to-orange-500 bg-clip-text text-transparent">
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
                      className="mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image2}
                      alt={item.alt2}
                      className="mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow h-auto object-contain rounded-lg cursor-pointer"
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      src={item.image3}
                      alt={item.alt3}
                      className="mt-6 md:mt-12 lg:mt-0 custom-shadow h-auto object-contain rounded-lg cursor-pointer"
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
        <p>Cette fonctionnalité n&apos;est pas disponible pour le moment.</p>
      </Popup>
    </div>
  );
};

export default Projects;
