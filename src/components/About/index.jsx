import config from "../../data/index.json";

const About = () => {
    const about = config.about;
    return (
      <div id="a_propos" className="snap-start px-8 md:px-32 pt-12 pb-12 content-center bg-gradient-to-tr from-blue-500 via-lime-500 to-orange-700">
        <h1 className=" uppercase font-bold text-center text-white text-bold text-4xl">{about.title}</h1>
        <div className="mt-16 flex flex-col md:flex-row align-center items-center">
          <div className="w-1/2 flex justify-center content-center">
            <img 
              src={about.image} 
              alt="about" 
              className="shadow-2xl" 
              width={400} 
              height={400}
              />
          </div>
          <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left max-w-2xl">
            <div className="about__primary">
              <p className="text-justify">{about.primary}</p>
              <p className="mt-3 text-justify">{about.secondary}</p>
              <p className="mt-3 text-justify">{about.tertiary}</p>
              <p className="mt-3 text-justify">{about.quaternary}</p>
              <p className="mt-3 text-justify">{about.quinary}</p>
              <p className="mt-3 text-justify">{about.senary}</p>
              <p className="mt-3 text-justify">{about.septenary}</p>
              <p className="mt-3 text-justify">{about.octonary}</p>
            </div>
            <div className="mt-6 mx-auto md:mx-0 py-1 pt-2 pb-2 w-44 text-center font-bold">
            <a href="#contact" className="border-2 rounded-lg border-solid border-white text-white font-bold text-center py-1 px-2 w-44 mx-auto md:mx-0 mt-6">Envoyer un message</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default About;