import useVisibilityObserver from '../../utils/useVisibilityObserver';
import { useLanguage } from '../../contexts/languageHooks';

const About = () => {
  const { config } = useLanguage();
  const about = config.about;
  const [isImageVisible, imageRef] = useVisibilityObserver(0.8);
  const [isTextVisible, textRef] = useVisibilityObserver(0.3);

  return (
    <section
      id="Presentation"
      className="snap-start md:px-32 pt-12 pb-12 content-center gradient-background"
    >
      <div className="mt-16 flex flex-col lg:flex-row align-center items-center">
        <div className="w-full lg:w-1/2 flex justify-center content-center px-4">
          <img
            src={about.image}
            alt="Photo de Guillaume Bréchaire"
            className={`shadow-2xl rounded-lg ${isImageVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
            width={400}
            height={400}
            ref={imageRef}
          />
        </div>
        <div className="lg:w-1/2 about-text lg:ml-4 text-center lg:text-left max-w-2xl font-mono p-4">
          <div className={`about shadow-2xl p-4 rounded-lg ${isTextVisible ? 'opacity-100 animate-slideInRight' : 'opacity-0'}`} ref={textRef}>
            <h2 className="uppercase font-semibold text-left custom-text text-2xl font-kanit mb-4 mt-10 lg:mt-0">
              {about.title}
            </h2>
            <p className="text-justify">{about.primary}</p>
            <p className="mt-3 text-justify">{about.secondary}</p>
            <p className="mt-3 text-justify">{about.tertiary}</p>
            <p className="mt-3 text-justify">{about.quaternary}</p>
            <p className="mt-3 text-justify">{about.quinary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
