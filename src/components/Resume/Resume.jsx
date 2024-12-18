import PropTypes from 'prop-types';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import 'tailwindcss/tailwind.css';
import { useLanguage } from '../../contexts/languageHooks';
import LinkPreview from '../ui/LinkPreview.jsx'; // Assurez-vous que le chemin est correct

const Resume = ({ isDarkMode }) => {
    const { language, t } = useLanguage();

    const getResumeImage = () => {
        if (language === 'en') {
            return isDarkMode ? '/images/CV/cv-dark_en.jpg' : '/images/CV/cv_en.jpg';
        }
        return isDarkMode ? '/images/CV/cv-dark.jpg' : '/images/CV/cv.jpg';
    };

    const getResumePdf = () => {
        return language === 'en' ? '/pdf/CV_Guillaume_Brechaire_en.pdf' : '/pdf/CV_Guillaume_Brechaire.pdf';
    };

    const getPreviewImage = () => {
        if (language === 'en') {
            return isDarkMode ? '/images/CV/cv-dark_en.jpg' : '/images/CV/cv_en.jpg';
        }
        return isDarkMode ? '/images/CV/cv-dark.jpg' : '/images/CV/cv.jpg';
    };

    return (
        <div className="about-text sm:pt-2 pb-10 md:pb-60">
            <div className="bg-[#18181B] pb-20 sm:pb-24 xl:pb-0">
                <div className={`mx-auto flex max-w-screen-3xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch ${isDarkMode ? 'border-t border-b' : ''}`}>
                    <div className="-mt-8 sm:-mt-24 w-full max-w-2xl xl:-mb-36 xl:w-3/4 xl:flex-none ">
                        <Zoom>
                            <div className="relative aspect-[2/1] h-full  xl:aspect-auto z-10">
                                <img
                                    src={getResumeImage()}
                                    alt={`CV Guillaume Bréchaire ${language === 'en' ? '(English)' : '(Français)'}`}
                                    className={`inset-0 h-full w-full rounded-2xl object-cover object-top shadow-2xl ${isDarkMode ? 'ring-1 ring-gray-100' : 'ring-1 ring-gray-900'}`}
                                    width={200}
                                    height={125}
                                />
                            </div>
                        </Zoom>
                    </div>
                    <div className="w-full max-w-2xl xl:max-w-5xl xl:flex-auto xl:px-16 xl:py-24">
                        <figure className="relative isolate pt-6 sm:pt-12">
                            <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl animate-fadeInLeft" aria-hidden="true">
                                <div
                                    className="aspect-[1404/767] w-[87.75rem] gradient-background-bis opacity-25"
                                    style={{
                                        clipPath:
                                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                    }}
                                />
                            </div>
                            <svg
                                viewBox="0 0 162 128"
                                fill="none"
                                aria-hidden="true"
                                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                            >
                                <path
                                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                />
                                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                            </svg>
                            <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                                <p>
                                    {t.resumeDescription}
                                </p>
                                <div className="my-8 flex justify-start">
                                    <LinkPreview
                                        url={getResumePdf()}
                                        imageSrc={getPreviewImage()}
                                        alt={`CV Guillaume Bréchaire ${language === 'en' ? '(English)' : '(Français)'}`}
                                        className="font-bold"
                                        isStatic
                                    >
                                        <a
                                            href={getResumePdf()}
                                            download={`CV_Guillaume_Brechaire${language === 'en' ? '_en' : ''}.pdf`}
                                            type="text"
                                            className="rounded-md gradient-button px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            aria-label={t.downloadResumeButton}
                                        >
                                            <svg
                                                height="16px"
                                                width="16px"
                                                className={`shadow-sm inline-block mr-2.5 -mt-0.5 text-white ${isDarkMode ? "text-white" : "text-black"}`}
                                                data-name="Layer 2"
                                                id="bdd05811-e15d-428c-bb53-8661459f9307"
                                                viewBox="0 0 35 35"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    className="text-white"
                                                    fill="currentColor"
                                                    d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"
                                                ></path>
                                                <path
                                                    className="text-white"
                                                    fill="currentColor"
                                                    d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"
                                                ></path>
                                                <path
                                                    className="text-white"
                                                    fill="currentColor"
                                                    d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"
                                                ></path>
                                            </svg>
                                            {t.downloadResumeButton}
                                        </a>
                                    </LinkPreview>
                                </div>
                            </blockquote>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

Resume.propTypes = {
    isDarkMode: PropTypes.bool.isRequired
};

export default Resume;
