import { useLanguage } from '../../contexts/languageHooks';
import './style.scss';

const Footer = () => {
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
        <p className="mt-2 text-center text-xs leading-5 custom-text-white">
          © {getYear()} - {t.footer}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
