import { useLanguage } from '../../contexts/languageHooks';
import './style.scss';
import Proptypes from 'prop-types';

const Footer = ({isDarkMode}) => {
  const { config, t } = useLanguage();
  const navigation = config.navigation;
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="about-text">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex text-center sm:justify-center sm:space-x-12 custom-footer" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.title} className="pb-6">
              <a href={`#${item.ancre}`} className="text-sm leading-6">
                {item.title}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-16 text-center">
          <p className="text-xs leading-5 custom-text-white">
            <a target="_blank" href="https://icons8.com/icon/9P70tJJKRpAo/music-record" rel="noreferrer" className="underline">Music Record</a>
            <span> {t.footerIcons} </span>
            <a target="_blank" href="https://icons8.com" rel="noreferrer" className="underline">Icons8</a>
          </p>
        </div>
        <p className="flex justify-center mt-2 text-center text-xs leading-5 custom-text-white items-center">
          © {getYear()} - {t.footer}
          <img
            src="/favicon_io/favicon.ico"
            alt="Favicon"
            className={`w-5 h-5 inline-block ml-2 ring-1 rounded-full p-0.5 ${isDarkMode ? 'ring-white' : 'ring-black'}`}
          />
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: Proptypes.bool,
};

export default Footer;
