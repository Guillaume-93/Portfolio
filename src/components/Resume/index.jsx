import 'tailwindcss/tailwind.css';

const Resume = () => {
  return (
    <div id='experiences' className="w-full h-full flex flex-col items-center justify-center bg-gray-100 p-8">
      <img src="/images/cv.jpg" alt="CV Guillaume Bréchaire" className="shadow-lg max-w-full h-auto mb-4" />
      <div className="text-md text-center font-semibold p-0.5 bg-gradient-to-r from-blue-400 via-lime-500 to-orange-500">
        <a href="/images/cv.jpg" download="CV_Guillaume_Brechaire.jpg">
          <div className="bg-white">
            <span className="block py-0.5 px-2 bg-white bg-gradient-to-r from-blue-400 via-lime-500 to-orange-500 bg-clip-text text-transparent cursor-not-allowed">
              Télécharger le CV
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Resume;
