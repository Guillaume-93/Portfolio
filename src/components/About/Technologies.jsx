import { useMemo } from 'react';
import Proptypes from 'prop-types';
import Cloud from '../magicui/IconCloud';
import { useLanguage } from '../../contexts/languageHooks';
import useVisibilityObserver from '../../utils/useVisibilityObserver';

function Technologies({ isDarkMode }) {
    const { config } = useLanguage();

    const iconSlugs = useMemo(() => ["javascript", "react", "nodejs", "express", "html5", "css3", "sass", "tailwindcss", "git", "github", "heroku", "netlify", "typescript", "redux", "postgresql", "linux", "windows", "axios", "vite", "json", "npm", "yarn", "postman", "sequelize", "trello", "notion"], []);

    const technologies = useMemo(() => config.technologies, [config.technologies]);
    const [isTechnologiesVisible, technologiesRef] = useVisibilityObserver(0.1);

    const cloudElement = useMemo(() => (
        <Cloud iconSlugs={iconSlugs} isDarkMode={isDarkMode} />
    ), [iconSlugs, isDarkMode]);

    return (
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
            <div
                className={`relative isolate overflow-hidden about-text px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 ${isTechnologiesVisible ? 'opacity-100 animate-fadeInSlow' : 'opacity-0'}`}
                ref={technologiesRef}>
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight custom-text-white sm:text-4xl">
                    {technologies[0].title}
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 custom-text-white">
                    {technologies[0].description}
                </p>
                <div className="">
                    {cloudElement}
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
    );
}

Technologies.propTypes = {
    isDarkMode: Proptypes.bool.isRequired,
};

export default Technologies;
