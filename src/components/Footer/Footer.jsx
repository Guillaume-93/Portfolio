import { useLanguage } from '../../contexts/languageHooks';

const Footer = () => {
  const { config, t } = useLanguage();
  const footer = config.footer;

  const navigation = config.navigation;
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="about-text">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 custom-footer" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.title} className="pb-6">
              <a href={`#${item.ancre}`} className="text-sm leading-6">
                {item.title}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10 custom-footer text-3xl">
          <a rel="noreferrer" href={footer.linkedin} target="_blank" aria-label={t.visitProfilLinkedin}>
            <i className="devicon-linkedin-plain"></i>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a rel="noreferrer" href={footer.github} target="_blank" aria-label={t.visitProfilGithub}>
            <i className="devicon-github-original"></i>
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        <p className="mt-10 text-center text-xs leading-5 custom-text-white">
          © {getYear()} - {t.footer}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
