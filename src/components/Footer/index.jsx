import PropTypes from 'prop-types';
import { useLanguage } from '../../contexts/languageHooks';

const Footer = ({ isDarkMode }) => {
  const { config, t } = useLanguage();
  const footer = config.footer;
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={`px-8 py-16 flex justify-center items-center flex-col ${!isDarkMode ? 'bg-neutral-900' : 'bg-[#111827]'}`}>
      <div className="mx-auto text-3xl mb-8 space-x-10 text-neutral-300">
        <a rel="noreferrer" href={footer.linkedin} target="_blank" aria-label={t.visitProfilLinkedin}>
          <i className="devicon-linkedin-plain"></i>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a rel="noreferrer" href={footer.github} target="_blank" aria-label={t.visitProfilGithub}>
          <i className="devicon-github-original"></i>
          <span className="sr-only">GitHub</span>
        </a>
      </div>
      <span className="text-sm text-center text-neutral-300">
        © {getYear()} - {t.footer}
      </span>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

export default Footer;
