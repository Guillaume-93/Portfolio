import PropTypes from 'prop-types';
import Zoom from 'react-medium-image-zoom';
import 'tailwindcss/tailwind.css';
import useVisibilityObserver from '../../utils/useVisibilityObserver';

const Resume = ({ isDarkMode }) => {

  const [isImageVisible, imageRef] = useVisibilityObserver(0.2);

  return (
    <div id='Experiences' className={`w-full h-full flex flex-col items-center justify-center p-8 text-background font-mono ${!isDarkMode ? 'border-t' : ' border-t border-white'}`}>
      <Zoom>
        <img
          ref={imageRef}
          src={isDarkMode ? "/images/cv-dark.jpg" : "/images/cv.jpg"}
          alt="CV Guillaume Bréchaire"
          className={`shadow-lg max-w-full lg:max-w-4xl h-auto mb-4 border-2 border-background rounded-lg cursor-pointer ${isImageVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
        />
      </Zoom>
      <div className="text-md text-center font-semibold p-0.5 gradient-background">
        <a href="/pdf/CV_Guillaume_Brechaire.pdf" download="CV_Guillaume_Brechaire.pdf">
          <div className="text-background">
            <span className="block py-0.5 px-2 gradient-text">
              Télécharger le CV
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
