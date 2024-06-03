/* eslint-disable react/prop-types */
import 'tailwindcss/tailwind.css';
import Zoom from 'react-medium-image-zoom';

const Resume = ({ isDarkMode }) => {
  return (
    <div id='experiences' className={`w-full h-full flex flex-col items-center justify-center p-8 text-background font-mono ${!isDarkMode ? 'border-t':' border-t border-white'}`}>
      <Zoom>
        <img
          src="/images/cv.jpg"
          alt="CV Guillaume Bréchaire"
          className="shadow-lg max-w-full lg:max-w-4xl h-auto mb-4"
        />
      </Zoom>
      <div className="text-md text-center font-semibold p-0.5 gradient-background">
        <a href="/images/cv.jpg" download="CV_Guillaume_Brechaire.jpg">
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

export default Resume;
