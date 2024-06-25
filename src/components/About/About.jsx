import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/languageHooks';
import useVisibilityObserver from '../../utils/useVisibilityObserver';

const About = () => {
    const { config, t } = useLanguage();
    const about = config.about;
    const projects = config.projects;
    const timeline = config.timeline;
    const technologies = config.technologies;

    const [isImageVisible, imageRef] = useVisibilityObserver(0.5);
    const [isTextVisible, textRef] = useVisibilityObserver(0.5);
    const [isTechnologiesVisible, technologiesRef] = useVisibilityObserver(0.1);
    const [isProjectVisible, projectRef] = useVisibilityObserver(0.1);
    const [isLinkVisible, linkRef] = useVisibilityObserver(1);

    const [isProjectImage1Visible, projectImage1Ref] = useVisibilityObserver(0.1);
    const [isProjectImage2Visible, projectImage2Ref] = useVisibilityObserver(0.1);
    const [isProjectImage3Visible, projectImage3Ref] = useVisibilityObserver(0.1);
    const [isProjectImage4Visible, projectImage4Ref] = useVisibilityObserver(0.1);

    const [timelineVisibility, setTimelineVisibility] = useState(
        Array(timeline.length).fill(false)
    );
    const timelineRefs = useRef([]);

    useEffect(() => {
        const observers = timelineRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimelineVisibility((prev) => {
                            const newState = [...prev];
                            newState[index] = true;
                            return newState;
                        });
                        observer.disconnect();
                    }
                },
                { threshold: 0.3 }
            );
            if (ref) observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [config, timeline]);

    return (
        <div id={t.about} className="text-background pb-12">
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10 overflow-hidden pt-14">
                    <div
                        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] shadow-xl shadow-indigo-600/10 sm:-mr-80 sm:w-[180%] md:-mr-64 md:w-[160%] lg:-mr-48 lg:w-[140%] xl:-mr-32 xl:w-[120%] 2xl:-mr-24 2xl:w-[100%] gradient-background opacity-60"
                        aria-hidden="true"
                    />
                    <div className="mx-auto max-w-7xl px-6 pb-32 sm:py-40 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className={`max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto custom-text-white ${isTextVisible ? 'opacity-100 animate-fadeInLeft' : 'opacity-0'} `} ref={textRef}>
                                {about.title}
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className={`text-lg leading-8 custom-text-white ${isTextVisible ? 'opacity-100 animate-fadeInLeft' : 'opacity-0'}`}>
                                    {about.primary}
                                </p>
                            </div>
                            <img
                                src="/images/IMG_2779.jpg"
                                alt=""
                                className={`mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 ${isImageVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
                                ref={imageRef}
                            />
                        </div>
                    </div>
                    <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                        <div
                            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                            style={{
                                clipPath:
                                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                            }}
                        />
                    </div>
                </div>

                {/* Timeline section */}
                <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {timeline.map((item, index) => (
                            <div key={`${item.name}-${index}`} ref={(el) => (timelineRefs.current[index] = el)}>
                                <time
                                    dateTime={item.dateTime}
                                    className={`flex items-center text-sm font-semibold leading-6 custom-text-white ${timelineVisibility[index] ? 'opacity-100 animate-fadeInSlow transition-delay-${index * 200}' : 'opacity-0'}`}
                                >
                                    <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                        <circle cx={2} cy={2} r={2} fill="currentColor" />
                                    </svg>
                                    {item.date}
                                    <div
                                        className="absolute -ml-2 h-px w-screen -translate-x-full text-background-dark sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                        aria-hidden="true"
                                    />
                                </time>
                                <p className={`mt-6 text-lg font-semibold leading-8 tracking-tight custom-text-white ${timelineVisibility[index] ? 'opacity-100 animate-fadeInUp transition-delay-${index * 200}' : 'opacity-0'}`}>
                                    {item.name}
                                </p>
                                <p className={`mt-1 text-base leading-7 custom-text-white ${timelineVisibility[index] ? 'opacity-100 animate-fadeInUp transition-delay-${index * 200}' : 'opacity-0'}`}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies section */}
                <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
                    <div
                        className={`relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 ${isTechnologiesVisible ? 'opacity-100 animate-fadeInSlow' : 'opacity-0'}`}
                        ref={technologiesRef}>
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {technologies[0].title}
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                            {technologies[0].description}
                        </p>
                        <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-5 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 md:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
                            {technologies.map((tech, index) => (
                                <img
                                    key={`${tech.name}-${index}`}
                                    src={tech.image}
                                    className='h-20'
                                    alt={tech.alt} />
                            ))}
                            <i className="devicon-nextjs-plain text-5xl sm:text-6xl text-white" alt="Next.js"></i>
                            <i className="devicon-express-original text-5xl sm:text-6xl text-white" alt="Express"></i>
                            <i className="devicon-github-original text-5xl sm:text-6xl text-white" alt="Github"></i>
                        </div>
                        <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                            <div
                                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                                style={{
                                    clipPath:
                                        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div id={t.projects}></div>

                {/* projects section */}
                <div className="pt-20 overflow-hidden sm:mt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                <h2 className={`text-3xl font-bold tracking-tight custom-text-white sm:text-4xl ${isProjectVisible ? 'opacity-100 animate-fadeInLeft' : 'opacity-0'}`} ref={projectRef}>{projects.title}</h2>
                                <p className={`mt-6 text-xl leading-8 custom-text-white ${isProjectVisible ? 'opacity-100 animate-fadeInLeft' : 'opacity-0'}`}>
                                    {projects.description}
                                </p>
                                <p className={`mt-6 text-base leading-7 custom-text-white ${isProjectVisible ? 'opacity-100 animate-fadeInLeft' : 'opacity-0'}`}>
                                    {projects.description3}
                                </p>
                                <ul className={`flex flex-col gap-y-3 mt-6 `}>
                                    <li className={`${isLinkVisible ? 'opacity-100 animate-fadeInRight' : 'opacity-0'}`} ref={linkRef} >
                                        <a
                                            href="#atlasdd"
                                            className={`font-semibold leading-6 text-blue-700 `}>
                                            <span className={`bg-blue-100 px-3 py-0.5 rounded-full `}>{projects.formationProjects[0].title}</span>
                                        </a>
                                    </li>
                                    <li className={`${isLinkVisible ? 'opacity-100 animate-fadeInRightSlow1' : 'opacity-0'}`} ref={linkRef}>
                                        <a
                                            href="#ghibliotheque"
                                            className={`font-semibold leading-6 text-blue-700 `}>
                                            <span className={`bg-blue-100 px-3 py-0.5 rounded-full `}>{projects.formationProjects[1].title}</span>
                                        </a>
                                    </li>
                                    <li className={`${isLinkVisible ? 'opacity-100 animate-fadeInRightSlow2' : 'opacity-0'}`} ref={linkRef}>
                                        <a
                                            href="#pokedex"
                                            className={`font-semibold leading-6 text-blue-700 `}>
                                            <span className={`bg-blue-100 px-3 py-0.5 rounded-full `}>{projects.formationProjects[2].title}</span>
                                        </a>
                                    </li>
                                    <li className={`${isLinkVisible ? 'opacity-100 animate-fadeInRightSlow3' : 'opacity-0'}`} ref={linkRef}>
                                        <a
                                            href="#orecipes"
                                            className={`font-semibold leading-6 text-blue-700 `}>
                                            <span className={`bg-blue-100 px-3 py-0.5 rounded-full `}>{projects.formationProjects[3].title}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                <div className={`w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end`}>
                                    <a href="#atlasdd">
                                        <img
                                            src={projects.formationProjects[0].image6}
                                            alt={projects.formationProjects[0].alt6}
                                            ref={projectImage1Ref}
                                            className={`hidden sm:block aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover ${isProjectImage1Visible ? 'opacity-100 animate-fadeInRight transition-delay-200' : 'opacity-0'}`}
                                            aria-label={`${t.goToProject} ${projects.formationProjects[2].title}`}
                                        />
                                    </a>
                                </div>
                                <div className={`contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8`}>
                                    <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                        <a href="#ghibliotheque">
                                            <img
                                                src={projects.formationProjects[1].image6}
                                                alt={projects.formationProjects[1].alt6}
                                                ref={projectImage2Ref}
                                                className={`hidden sm:block aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover ${isProjectImage2Visible ? 'opacity-100 animate-fadeInLeft transition-delay-400' : 'opacity-0'}`}
                                                aria-label={`${t.goToProject} ${projects.formationProjects[1].title}`}
                                            />
                                        </a>
                                    </div>
                                    <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                        <a href="#pokedex">
                                            <img
                                                src={projects.formationProjects[2].image6}
                                                alt={projects.formationProjects[2].alt6}
                                                ref={projectImage3Ref}
                                                className={`hidden sm:block aspect-[7/5] w-[30rem] xl:w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover ${isProjectImage3Visible ? 'opacity-100 animate-fadeInUp transition-delay-600' : 'opacity-0'}`}
                                                aria-label={`${t.goToProject} ${projects.formationProjects[0].title}`}
                                            />
                                        </a>
                                    </div>
                                    <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                        <a href="#orecipes">
                                            <img
                                                src={projects.formationProjects[3].image6}
                                                alt={projects.formationProjects[3].alt6}
                                                ref={projectImage4Ref}
                                                className={`aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover ${isProjectImage4Visible ? 'opacity-100 animate-slideInRight transition-delay-800' : 'opacity-0'}`}
                                                aria-label={`${t.goToProject} ${projects.formationProjects[3].title}`}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;
