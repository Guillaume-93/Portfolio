import { useLanguage } from '../../contexts/languageHooks';

const Informations = () => {
  const { config, t } = useLanguage();
  const informations = config.informations;

  return (
    <section id={t.home} className="text-background custom-size-informations overflow-x-hidden pb-32">
      <div className="px-6 lg:px-32 flex flex-col justify-center align-center">
        <h1 className="text-4xl sm:text-6xl mt-20 md:mt-32 lg:mt-64 font-bold tracking-wide flex flex-wrap font-kanit animate-fadeInLeft">
          <span className='mr-3'>{informations.intro}</span>
          <span className="whitespace-nowrap gradient-text mr-3">
            {informations.firstname}
          </span>
          <span className="whitespace-nowrap gradient-text">
            {informations.lastname}
          </span>
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-wide mt-2 font-kanit animate-fadeInLeft">
          {informations.subtitle}
        </h2>
        <p className="mt-8 text-lg leading-8 md:text-2xl animate-fadeInLeft">
          {informations.title}
        </p>
        <div className="mt-8 flex justify-start">
          <a
            href={`#${t.about}`}
            type="text"
            className="rounded-md gradient-button px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-slideInLeft"
            aria-label={`${t.goToSection} ${t.about}`}
          >
            {t.informationsButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Informations;
