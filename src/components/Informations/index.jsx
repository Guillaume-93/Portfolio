import config from '../../data/index.json';

const Informations = () => {
  const informations = config.informations;

  return (
    <section id="Home" className="text-background custom-size-informations overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-center">
        <h1 className="text-4xl md:text-6xl mt-20 md:mt-32 lg:mt-64 font-bold tracking-wide flex flex-wrap font-kanit animate-fadeInLeft">
          Hey, moi c&apos;est
          <span className="custom-margin whitespace-nowrap gradient-text mr-3">
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
          Ce site est un portfolio interactif, conçu pour me présenter, ainsi que mes projets. Il offre une navigation fluide et intuitive, avec un design minimaliste et élégant. Il est conçu pour être accessible sur tous les appareils, offrant une expérience utilisateur optimale.
        </p>
        <a href="#Presentation" className="mb-8 text-2xl font-bold p-0.5 mt-6 w-44 gradient-background animate-slideInLeft">
          <div className="text-background">
            <span className="block text-center py-0.5 px-2 font-semibold gradient-text font-mono animate-pulse">
              Voir plus
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Informations;
