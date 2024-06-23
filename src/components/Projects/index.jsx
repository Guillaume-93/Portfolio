import { useEffect, useRef, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import truncateText from '../../utils/truncateText';
import useVisibilityObserver from '../../utils/useVisibilityObserver';
import Popup from '../Popup';
import { useLanguage } from '../../contexts/languageHooks';

const Projects = () => {
  const { config, t } = useLanguage();
  const projects = config.projects;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState({});

  const [isTitleVisible, titleRef] = useVisibilityObserver(1);
  const [isTitle2Visible, title2Ref] = useVisibilityObserver(1);
  const [isDescriptionVisible, descriptionRef] = useVisibilityObserver(1);
  const [isDescription2Visible, description2Ref] = useVisibilityObserver(1);

  const formationImageRefs = useRef([]);
  const apotheoseImageRefs = useRef([]);
  const textRefs = useRef([]);
  const titleRefs = useRef([]);

  const [isImageVisible, setIsImageVisible] = useState(
    Array(projects.formationProjects.length * 3 + projects.apotheoseProjects.length * 3).fill(false)
  );

  const [isTextVisible, setIsTextVisible] = useState(
    Array(projects.formationProjects.length + projects.apotheoseProjects.length + 2).fill(false)
  );

  const [isProjectTitleVisible, setIsProjectTitleVisible] = useState(
    Array(projects.formationProjects.length + projects.apotheoseProjects.length).fill(false)
  );

  useEffect(() => {
    const handleIntersection = (setVisible) => (index) => (entries) => {
      if (entries[0].isIntersecting) {
        setVisible((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }
    };

    const imageObservers = [
      ...formationImageRefs.current,
      ...apotheoseImageRefs.current
    ].map((ref, index) => new IntersectionObserver(handleIntersection(setIsImageVisible)(index), { threshold: 1 }));

    const textObservers = [
      ...textRefs.current,
    ].map((ref, index) => new IntersectionObserver(handleIntersection(setIsTextVisible)(index), { threshold: 0.1 }));

    const titleObservers = [
      ...titleRefs.current,
    ].map((ref, index) => new IntersectionObserver(handleIntersection(setIsProjectTitleVisible)(index), { threshold: 0.5 }));

    imageObservers.forEach((observer, index) => {
      const currentRef = index < formationImageRefs.current.length
        ? formationImageRefs.current[index]
        : apotheoseImageRefs.current[index - formationImageRefs.current.length];
      if (currentRef) {
        observer.observe(currentRef);
      }
    });

    textObservers.forEach((observer, index) => {
      const currentRef = textRefs.current[index];
      if (currentRef) {
        observer.observe(currentRef);
      }
    });

    titleObservers.forEach((observer, index) => {
      const currentRef = titleRefs.current[index];
      if (currentRef) {
        observer.observe(currentRef);
      }
    });

    return () => {
      imageObservers.forEach((observer) => observer.disconnect());
      textObservers.forEach((observer) => observer.disconnect());
      titleObservers.forEach((observer) => observer.disconnect());
    };
  }, [config, t]);

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
      <p className={`mt-6 ${isTextVisible[index] ? 'animate-fadeInLeft' : 'opacity-0'}`} ref={(el) => (textRefs.current[index] = el)}>
        <span>
          {isFullDescriptionShown ? description : truncatedDescription}
          <button
            className="text-blue-500 ml-2 dark:text-blue-300"
            onClick={() => toggleDescription(index, type)}
          >
            {isFullDescriptionShown ? t.lessDescriptionButton : t.moreDescriptionButton}
          </button>
        </span>
      </p>
    );
  };

  return (
    <section id={t.projects} className="projects px-6 lg:px-16 pb-16 text-background">
      <h2 className={`pt-20 mb-12 uppercase font-bold text-center text-4xl font-kanit ${isTitleVisible ? 'animate-fadeInSlow' : 'opacity-0'}`} ref={titleRef}>
        {projects.title}
      </h2>
      <div className="flex justify-center">
        <p className={`custom-width text-justify mb-12 font-mono ${isDescriptionVisible ? 'animate-fadeInSlow' : 'opacity-0'}`} ref={descriptionRef}>
          {projects.description}
        </p>
      </div>
      <div className="projects__menu">
        <ul>
          {projects.formationProjects.map((item, index) => (
            <li key={`${item.title}-${index}`} className="flex flex-col lg:flex-row mt-12 justify-center font-mono">
              <div className={`lg:w-1/3 ${isProjectTitleVisible[index] ? 'animate-fadeInLeft' : 'opacity-0'}`} ref={(el) => (titleRefs.current[index] = el)}>
                <h2 className={`text-2xl font-kanit`}>{item.title}</h2>
                <div className='font-mono text-justify'>{getDescription(item.description, index, 'formation')}</div>
                <div className="flex mt-4">
                  <div className="text-center font-semibold p-0.5 gradient-background">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup(); }} rel="noreferrer" aria-label={t.projectsButton}>
                      <div className="text-background">
                        <span className={`block py-0.5 px-2 gradient-text cursor-not-allowed`}>
                          {t.projectsButton}
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="ml-2 font-semibold">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup(); }} rel="noreferrer" aria-label={t.codeSourceButton}>
                      <span className={`block py-1 px-2 gradient-text cursor-not-allowed`}>
                        {t.codeSourceButton}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-flex flex flex-col">
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      ref={(el) => (formationImageRefs.current[index * 3] = el)}
                      src={item.image}
                      alt={item.alt}
                      className={`mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer ${isImageVisible[index * 3] ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      ref={(el) => (formationImageRefs.current[index * 3 + 1] = el)}
                      src={item.image2}
                      alt={item.alt2}
                      className={`mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer ${isImageVisible[index * 3 + 1] ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      ref={(el) => (formationImageRefs.current[index * 3 + 2] = el)}
                      src={item.image3}
                      alt={item.alt3}
                      className={`mt-6 md:mt-12 lg:mt-0 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer ${isImageVisible[index * 3 + 2] ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
                      width={1000}
                    />
                  </Zoom>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h2 className={`pt-12 mb-12 uppercase font-bold text-center text-4xl font-kanit ${isTitle2Visible ? 'animate-fadeInSlow' : 'opacity-0'}`} ref={title2Ref}>
        {projects.title2}
      </h2>
      <div className="flex justify-center">
        <p className={`custom-width text-justify mb-12 font-mono ${isDescription2Visible ? 'animate-fadeInSlow' : 'opacity-0'}`} ref={description2Ref}>
          {projects.description2}
        </p>
      </div>

      <div className="projects__menu">
        <ul>
          {projects.apotheoseProjects.map((item, index) => (
            <li key={`${item.title}-${index}`} className="flex flex-col lg:flex-row mt-12 justify-center font-mono">
              <div className={`lg:w-1/3 ${isProjectTitleVisible[projects.formationProjects.length + index] ? 'animate-fadeInLeft' : 'opacity-0'}`} ref={(el) => (titleRefs.current[projects.formationProjects.length + index] = el)}>
                <h2 className={`text-2xl dark:text-white font-kanit`} >{item.title}</h2>
                <div className='font-mono text-justify'>{getDescription(item.description, projects.formationProjects.length + index, 'apotheose')}</div>
                <div className="flex mt-4">
                  <div className="text-center font-semibold p-0.5 gradient-background">
                    <a href={item.url} target="_blank" rel="noreferrer" aria-label={t.projectsButton}>
                      <div className="text-background">
                        <span className={`block py-0.5 px-2 gradient-text`}>
                          {t.projectsButton}
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="ml-2 font-semibold">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleOpenPopup(); }} rel="noreferrer" aria-label={t.codeSourceButton}>
                      <span className={`block py-1 px-2 bg-white gradient-text cursor-not-allowed`}>
                        {t.codeSourceButton}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="custom-flex flex flex-col">
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      ref={(el) => (apotheoseImageRefs.current[index * 3] = el)}
                      src={item.image}
                      alt={item.alt}
                      className={`mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer ${isImageVisible[formationImageRefs.current.length + index * 3] ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                <Zoom>
                    <img
                      ref={(el) => (apotheoseImageRefs.current[index * 3 + 1] = el)}
                      src={item.image2}
                      alt={item.alt2}
                      className={`mt-6 md:mt-12 lg:mt-0 lg:mb-12 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer ${isImageVisible[formationImageRefs.current.length + index * 3 + 1] ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
                      width={1000}
                    />
                  </Zoom>
                </div>
                <div className="lg:ml-12">
                  <Zoom>
                    <img
                      ref={(el) => (apotheoseImageRefs.current[index * 3 + 2] = el)}
                      src={item.image3}
                      alt={item.alt3}
                      className={`mt-6 md:mt-12 lg:mt-0 custom-shadow-light h-auto object-contain rounded-lg cursor-pointer ${isImageVisible[formationImageRefs.current.length + index * 3 + 2] ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
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
        <p className='font-mono'>{t.popupMessage}</p>
      </Popup>
    </section>
  );
};

export default Projects;
