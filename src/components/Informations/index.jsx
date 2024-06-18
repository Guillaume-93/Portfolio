import { useLanguage } from '../../contexts/languageHooks';

const Informations = () => {
  const { config, t } = useLanguage();
  const informations = config.informations;

  return (
    <section id={t.home} className="text-background custom-size-informations overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-center">
        <h1 className="text-4xl md:text-6xl mt-20 md:mt-32 lg:mt-64 font-bold tracking-wide flex flex-wrap font-kanit animate-fadeInLeft">
          <span className='mr-3'>{informations.intro}</span>
          <span className="whitespace-nowrap gradient-text mr-3">
            {informations.firstname}
          </span>
          <span className="whitespace-nowrap gradient-text">
            {informations.lastname}
          </span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide mt-2 font-kanit animate-fadeInLeft">
          {informations.subtitle}
        </h2>
        <p className="mt-8 text-l md:text-2xl font-mono animate-fadeInLeft">
          {informations.title}
        </p>
        <a href={`#${t.about}`} className="mb-8 text-2xl font-bold p-0.5 mt-6 w-44 gradient-background animate-slideInLeft" aria-label={`${t.goToSection} ${t.about}`}>
          <div className="text-background">
            <span className="block text-center py-0.5 px-2 font-semibold gradient-text font-mono animate-pulse">
              {t.informationsButton}
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Informations;
