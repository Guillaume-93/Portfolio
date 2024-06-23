import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useLanguage } from '../../contexts/languageHooks';
import Popup from '../Popup/Popup';

const Projects = ({ isDarkMode }) => {
    const { config, t, language } = useLanguage();
    const projects = config.projects;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const projectRefs = useRef([]);
    const [projectVisibility, setProjectVisibility] = useState(
        Array(projects.formationProjects.length).fill(false)
    );

    useEffect(() => {
        const observers = projectRefs.current.map((ref, index) => {
            if (ref) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setProjectVisibility((prevVisibility) => {
                                const newVisibility = [...prevVisibility];
                                newVisibility[index] = true;
                                return newVisibility;
                            });
                            observer.disconnect();
                        }
                    },
                    { threshold: 0.1 }
                );
                observer.observe(ref);
                return observer;
            }
            return null;
        });

        return () => {
            observers.forEach(observer => observer && observer.disconnect());
        };
    }, [language, projects.formationProjects.length]);

    const handleOpenPopup = (project) => {
        if (project.url) {
            window.open(project.url, '_blank');
        } else {
            setIsPopupOpen(true);
        }
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="-z-10 sm:py-32 text-background">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="">
                    {projects.formationProjects.map((project, index) => (
                        <div
                            key={`${project.title}-${index}`}
                            id={project.ancre}
                            className={`py-4 sm:py-16 ${projectVisibility[index] ? 'opacity-100 animate-fadeInSlow' : 'opacity-0'}`}
                            ref={(el) => (projectRefs.current[index] = el)}
                        >
                            <div className="relative isolate overflow-hidden mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20 bg-gray-900 shadow-2xl">
                                <img
                                    className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                                    src={project.image6}
                                    alt={project.alt6}
                                />
                                <div className="w-full flex-auto">
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{project.title}</h2>
                                    <p className="mt-6 text-lg leading-8 text-gray-400">
                                        {project.description}
                                    </p>
                                    <div className="mt-10 flex">
                                        <Popover className="relative isolate z-50">
                                            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-blue-500">
                                                {t.seeMore}
                                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                                            </PopoverButton>
                                            <PopoverPanel
                                                transition="true"
                                                className="relative inset-x-0 bg-transparent mt-2 pt-6 rounded-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                            >
                                                <div className="mx-auto grid max-w-7xl grid-cols-1">
                                                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                                                        {project.image && (
                                                            <div className="relative flex-none">
                                                                <Zoom>
                                                                    <img
                                                                        className="aspect-[2/1] w-full rounded-lg object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                                                                        src={project.image}
                                                                        alt={project.alt}
                                                                    />
                                                                </Zoom>
                                                                <div className="mt-2 text-sm text-gray-600">
                                                                    {project.imageDescription}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {project.image3 && (
                                                            <div className="relative flex-none">
                                                                <Zoom>
                                                                    <img
                                                                        className="aspect-[2/1] w-full rounded-lg object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                                                                        src={project.image3}
                                                                        alt={project.alt3}
                                                                    />
                                                                </Zoom>
                                                                <div className="mt-2 text-sm text-gray-600">
                                                                    {project.image3Description}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {project.image4 && (
                                                            <div className="relative flex-none">
                                                                <Zoom>
                                                                    <img
                                                                        className="aspect-[2/1] w-full rounded-lg object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                                                                        src={project.image4}
                                                                        alt={project.alt4}
                                                                    />
                                                                </Zoom>
                                                                <div className="mt-2 text-sm text-gray-600">
                                                                    {project.image4Description}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {project.image5 && (
                                                            <div className="relative flex-none">
                                                                <Zoom>
                                                                    <img
                                                                        className="aspect-[2/1] w-full rounded-lg object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                                                                        src={project.image5}
                                                                        alt={project.alt5}
                                                                    />
                                                                </Zoom>
                                                                <div className="mt-2 text-sm text-gray-600">
                                                                    {project.image5Description}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="mt-10">
                                                        <h4 className="text-sm font-bold leading-6 text-white">{t.usedTechnologies}</h4>
                                                        <ul
                                                            role="list"
                                                            className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-sm leading-7 text-white sm:grid-cols-2"
                                                        >
                                                            {project.technologies.map((tech) => (
                                                                <li key={tech} className="flex gap-x-3">
                                                                    <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                                                                    <span className='text-gray-600'>{tech}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <button onClick={() => handleOpenPopup(project)} className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-blue-500 mt-6" aria-label={t.projectsButton}>
                                                        {t.projectsButton} <span aria-hidden="true">&rarr;</span>
                                                    </button>
                                                </div>
                                            </PopoverPanel>
                                        </Popover>
                                    </div>
                                </div>
                                <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                                    <div
                                        className="aspect-[1404/767] w-[87.75rem] gradient-background-bis opacity-25"
                                        style={{
                                            clipPath:
                                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id={t.experiences}></div>
            <Popup isOpen={isPopupOpen} isDarkMode={isDarkMode} onClose={handleClosePopup}>
                {t.popupMessage}
            </Popup>
        </div>
    );
};

Projects.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};

export default Projects;
