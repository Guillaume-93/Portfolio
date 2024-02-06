const Resume = () => {
    return (
      <div className="w-[210mm] h-[297mm] bg-white shadow-lg mx-auto my-8 p-8 overflow-hidden print:shadow-none print:m-0">
        <div className="flex">
          {/* Colonne de gauche */}
          <div className="w-1/4 pr-4 space-y-4">
            <img src="path_to_your_photo.jpg" alt="Photo" className="w-full h-auto rounded-lg" />
            <div className="contact text-sm space-y-1">
              <p>Jean Dupont</p>
              <p>jean.dupont@example.com</p>
              <p>+33 6 12 34 56 78</p>
              <p>Paris, France</p>
            </div>
            <div className="qualities">
              <h4 className="text-lg font-semibold">Qualités</h4>
              <ul className="list-disc pl-5">
                <li>Proactif</li>
                <li>Créatif</li>
                <li>Travail en équipe</li>
              </ul>
            </div>
            <div className="skills">
              <h4 className="text-lg font-semibold">Compétences</h4>
              <ul className="list-disc pl-5">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="interests">
                <h4 className="text-lg font-semibold">Centres d&apos;intérêt</h4>
                <ul className="list-disc pl-5">
                    <li>Photographie</li>
                    <li>Voyage</li>
                    <li>Lecture</li>
                </ul>
            </div>
          </div>
          
          {/* Colonne de droite */}
          <div className="w-3/4 pl-4">
            <div className="name-and-title mb-4">
              <h1 className="text-4xl font-bold">Jean Dupont</h1>
              <h2 className="text-2xl font-semibold mt-2">Développeur Full Stack</h2>
            </div>
            <div className="brief-description mb-4">
                <p>Passionné par le développement web et mobile, avec plus de 5 ans d&apos;expérience dans la création d&apos;applications dynamiques et user-friendly.</p>
            </div>
            <div className="professional-experience mb-4">
              <h3 className="text-xl font-semibold mb-2">Expériences Professionnelles</h3>
              <div>
                <h4 className="font-semibold">Développeur Full Stack - XYZ Corp</h4>
                <p className="text-sm">Jan 2020 - Présent</p>
                <ul className="list-disc pl-5">
                  <li>Développement de fonctionnalités front-end et back-end pour des applications web.</li>
                  <li>Collaboration étroite avec les équipes de design pour la mise en œuvre de designs interactifs.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Développeur Front-End - ABC Inc.</h4>
                <p className="text-sm">Sep 2017 - Déc 2019</p>
                <ul className="list-disc pl-5">
                  <li>Implémentation de designs responsives avec HTML, CSS, et JavaScript.</li>
                  <li>Optimisation de la performance des sites web.</li>
                </ul>
              </div>
            </div>
            <div className="education">
              <h3 className="text-xl font-semibold mb-2">Formations</h3>
              <p className="font-semibold">Master en Informatique</p>
              <p className="text-sm">Université de Paris, 2017</p>
              <p className="font-semibold mt-2">Licence en Informatique</p>
              <p className="text-sm">Université de Lyon, 2015</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Resume;
  