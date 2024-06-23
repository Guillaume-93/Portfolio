import useVisibilityObserver from '../../utils/useVisibilityObserver';
import { useLanguage } from '../../contexts/languageHooks';

const About = () => {
  const { config, t } = useLanguage();
  const about = config.about;
  const [isImageVisible, imageRef] = useVisibilityObserver(0.8);
  const [isTextVisible, textRef] = useVisibilityObserver(0.3);

  return (
    <section
      id={t.about}
      className="relative snap-start md:px-32 pt-12 pb-12 content-center gradient-background h-screen w-full flex justify-center items-center"
    >
      <div className="relative w-full h-full">
        <div className="lg:absolute top-20 left-1/3 -translate-x-1/2 lg:w-1/2 flex justify-center content-center px-4">
          <img
            src={about.image}
            alt="Photo de Guillaume Bréchaire"
            className={`shadow-2xl rounded-lg ${isImageVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}
            width={400}
            height={400}
            ref={imageRef}
          />
        </div>

        <div className="absolute top-16 left-16 w-64">
          <div className={`about shadow-2xl p-4 rounded-lg  ${isTextVisible ? 'opacity-100 animate-slideInRight' : 'opacity-0'}`} ref={textRef}>
            <h2 className="uppercase font-semibold text-left custom-text text-2xl font-kanit mb-2">
              {about.title}
            </h2>
            <p className="text-justify leading-relaxed">{about.primary}</p>
          </div>
        </div>

        <div className="absolute top-40 left-40 w-64">
          <div className={`about shadow-2xl p-4 rounded-lg  ${isTextVisible ? 'opacity-100 animate-slideInRight' : 'opacity-0'}`} ref={textRef}>
            <p className="text-justify leading-relaxed">{about.secondary}</p>
          </div>
        </div>

        <div className="absolute top-64 left-24 w-64">
          <div className={`about shadow-2xl p-4 rounded-lg  ${isTextVisible ? 'opacity-100 animate-slideInRight' : 'opacity-0'}`} ref={textRef}>
            <p className="text-justify leading-relaxed">{about.tertiary}</p>
          </div>
        </div>

        <div className="absolute top-80 left-52 w-64">
          <div className={`about shadow-2xl p-4 rounded-lg  ${isTextVisible ? 'opacity-100 animate-slideInRight' : 'opacity-0'}`} ref={textRef}>
            <p className="text-justify leading-relaxed">{about.quaternary}</p>
          </div>
        </div>

        <div className="absolute top-96 left-12 w-64">
          <div className={`about shadow-2xl p-4 rounded-lg  ${isTextVisible ? 'opacity-100 animate-slideInRight' : 'opacity-0'}`} ref={textRef}>
            <p className="text-justify leading-relaxed">{about.quinary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
