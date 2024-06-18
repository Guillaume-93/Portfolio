import PropTypes from 'prop-types';
import Zoom from 'react-medium-image-zoom';
import 'tailwindcss/tailwind.css';
import useVisibilityObserver from '../../utils/useVisibilityObserver';
import { useLanguage } from '../../contexts/languageHooks';

const Resume = ({ isDarkMode }) => {
  const { language, t } = useLanguage();
  const [isImageVisible, imageRef] = useVisibilityObserver(0.2);

  const getResumeImage = () => {
    if (language === 'en') {
      return isDarkMode ? '/images/cv-dark_en.webp' : '/images/cv_en.webp';
    }
    return isDarkMode ? '/images/cv-dark.webp' : '/images/cv.webp';
  };

  const getResumePdf = () => {
    return language === 'en' ? '/pdf/CV_Guillaume_Brechaire_en.pdf' : '/pdf/CV_Guillaume_Brechaire.pdf';
  };

  return (
    <div id={t.experiences} className={`w-full h-full flex flex-col items-center justify-center p-8 text-background font-mono ${!isDarkMode ? 'border-t' : ' border-t border-white'}`}>
      <Zoom>
        <img
          ref={imageRef}
          src={getResumeImage()}
          alt={`CV Guillaume Bréchaire ${language === 'en' ? '(English)' : '(Français)'}`}
          className={`shadow-lg max-w-full lg:max-w-4xl h-auto mb-4 border-2 border-background rounded-lg cursor-pointer ${isImageVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
        />
      </Zoom>
      <div className="text-md text-center font-semibold p-0.5 gradient-background">
        <a href={getResumePdf()} download={`CV_Guillaume_Brechaire${language === 'en' ? '_en' : ''}.pdf`} aria-label={t.downloadResume}>
          <div className="text-background">
            <span className="block py-0.5 px-2 gradient-text">
              {t.downloadResume}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

Resume.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

export default Resume;
