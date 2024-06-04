/* eslint-disable react/prop-types */
import config from "../../data/index.json";

const Footer = ({ isDarkMode }) => {
  const footer = config.footer;
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={` px-8 py-16 flex justify-center align-center flex-col ${!isDarkMode ? 'bg-neutral-900' : 'bg-[#111827]'}`}>
      <div className="mx-auto text-3xl mb-8 space-x-10">
        <a rel="noreferrer" href={footer.linkedin} target="_blank">
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a rel="noreferrer" href={footer.github} target="_blank">
          <i className="devicon-github-original"></i>
        </a>
      </div>
      <span className="text-sm text-center text-neutral-600">
        © {getYear()} - Developed by - Guillaume Bréchaire - Inspired by Dylan Arveson
      </span>
    </div>
  );
};

export default Footer;