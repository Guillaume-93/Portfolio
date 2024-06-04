import config from '../../data/index.json';
import useVisibilityObserver from '../../utils/useVisibilityObserver';

const About = () => {
  const about = config.about;
  const [isImageVisible, imageRef] = useVisibilityObserver(0.8);
  const [isTextVisible, textRef] = useVisibilityObserver(0.3);

  return (
    <div
      id="a_propos"
      className="snap-start md:px-32 pt-12 pb-12 content-center gradient-background"
    >
      <div className="mt-16 flex flex-col lg:flex-row align-center items-center">
        <div className="w-full lg:w-1/2 flex justify-center content-center px-4">
          <img
            ref={imageRef}
            src={about.image}
            alt="Photo de Guillaume Bréchaire"
            className={`shadow-2xl transition-opacity duration-500 rounded-lg ${isImageVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
            width={400}
            height={400}
          />
        </div>
        <div className="lg:w-1/2 about-text lg:ml-4 text-center lg:text-left max-w-2xl font-mono p-4">
          <div ref={textRef} className={`about shadow-2xl p-4 rounded-lg transition-opacity duration-500 ${isTextVisible ? 'opacity-100 animate-slideInRight' : 'opacity-0'}`}>
            <h1 className="uppercase font-semibold text-left custom-text text-2xl font-kanit mb-4 mt-10 lg:mt-0">
              {about.title}
            </h1>
            <p className="text-justify">{about.primary}</p>
            <p className="mt-3 text-justify">{about.secondary}</p>
            <p className="mt-3 text-justify">{about.tertiary}</p>
            <p className="mt-3 text-justify">{about.quaternary}</p>
            <p className="mt-3 text-justify">{about.quinary}</p>
            <p className="mt-3 text-justify">{about.senary}</p>
            <p className="mt-3 text-justify">{about.septenary}</p>
            <p className="mt-3 text-justify">{about.octonary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
