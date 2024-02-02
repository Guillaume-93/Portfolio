import config from "../../data/index.json";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="custom-size-hero bg-white overflow-x-hidden">
      <div className="px-8 lg:px-32 flex flex-col justify-center align-center">
        <h1 className="text-4xl md:text-6xl mt-64 font-bold tracking-wide flex flex-wrap">
          Hey, moi c&apos;est
          <span className="whitespace-nowrap bg-gradient-to-r from-blue-600 via-lime-600 to-orange-600 bg-clip-text text-transparent ml-3">
            {hero.firstname}
          </span>
          <span className="whitespace-nowrap bg-gradient-to-r from-blue-600 via-lime-600 to-orange-600 bg-clip-text text-transparent ml-3">
            {hero.lastname}
          </span>
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mt-4">{hero.subtitle}</h1>
        <p className="mt-8 text-xl md:text-2xl">Ce site est un portfolio interactif, conçu pour me présenter ainsi que mes projets. Il offre une navigation fluide et intuitive, avec un design minimaliste et élégant. Il est conçu pour être accessible sur tous les appareils, offrant une expérience utilisateur optimale.</p>
        <a href="#À propos" className="mb-12 text-2xl font-bold p-0.5 mt-6 w-44 bg-gradient-to-r from-blue-400 via-yellow-500 to-orange-500">
          <div className="bg-white">
            <span className="block text-center py-0.5 px-2 font-semibold bg-white font-bold bg-gradient-to-r from-blue-400 via-lime-500 to-orange-500 bg-clip-text text-transparent">
              Voir plus
            </span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;