import config from '../../data/index.json';

const About = () => {
  const about = config.about;

  return (
    <div
      id="a_propos"
      className="snap-start px-8 md:px-32 pt-12 pb-12 content-center gradient-background custom-size-informations overflow-x-hidden"
    >

      <div className="mt-16 flex flex-col lg:flex-row align-center items-center">
        <div className="w-full lg:w-1/2 flex justify-center content-center">
          <img
            src={about.image}
            alt="Photo de Guillaume Bréchaire"
            className="shadow-2xl"
            width={400}
            height={400}
          />
        </div>
        <div className="lg:w-1/2 about-text lg:ml-4 text-center lg:text-left max-w-2xl font-mono p-4 rounded-lg">

          <div className="about shadow-2xl p-4">
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
          {/* <div className="mt-6 mx-auto lg:mx-0 py-1 pt-2 pb-2 w-44 text-center font-bold">
            <div className="text-md text-center font-semibold p-0.5 gradient-background">
              <a href="#contact">
                <div className="gradient-background">
                  <span className="block py-0.5 px-2 bg-green-900">
                    Envoyer un message
                  </span>
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
