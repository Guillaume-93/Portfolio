import { Expand } from "@theme-toggles/react";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from '../../contexts/languageHooks';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleLanguage, language, config, t } = useLanguage();
  const [isToggled, setToggle] = useState(isDarkMode);

  useEffect(() => {
    setToggle(isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    setToggle(!isToggled);
    toggleDarkMode();
  };

  useEffect(() => {
    const sectionContent = document.querySelector("section");
    if (sectionContent) {
      sectionContent.style.marginTop = isOpen ? "150px" : "0";
    }
  }, [isOpen]);

  const navigation = config.navigation;

  return (
    <header className={`text-background fixed top-0 w-full z-50 shadow-md ${!isDarkMode ? '' : 'border-b'}`}>
      <div className="flex justify-between items-center px-4 sm:px-8 h-10">
        <div className="flex items-center flex-1">
          <div className="mr-10 md:mr-28">
            <a href={`#${t.home}`} aria-label={t.home}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 3l9.5 9.5-1.41 1.41L18 11.83V20H6v-8.17L3.91 13.91 2.5 12.5 12 3zm1 5h-2v5h2V8zm-6 6h10v2H7v-2z" />
              </svg>
            </a>
          </div>

          <ul className={`flex-1 justify-start items-center hidden sm:flex md:gap-x-10 gap-x-7`}>
            {navigation.map((item) => (
              <li className="cursor-pointer" key={item.title}>
                <a key={item.title} href={`#${item.ancre}`} className='font-semibold leading-6' onClick={() => setIsOpen(false)} aria-label={`${t.goToSection} ${item.title}`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Expand toggled={isToggled} toggle={handleToggle} className="mr-4" aria-label={t.toggleDarkMode} />
        {language === 'fr' ? (
          <>
            <ReactCountryFlag
              countryCode="GB"
              title="English"
              svg
              className="rounded-full cursor-pointer mr-4"
              onClick={toggleLanguage}
              aria-label="Changer la langue en anglais"
            />
            <ReactCountryFlag
              countryCode="FR"
              title="Français"
              svg
              className="rounded-full cursor-pointer ring-2 ring-gray-500 ring-offset-2 ring-offset-background bg-white"
              aria-label="Changer la langue en Français"
            />
          </>
        ) : (
          <>
            <ReactCountryFlag
              countryCode="GB"
              title="English"
              svg
              className="rounded-full cursor-pointer ring-2 ring-gray-500 ring-offset-2 ring-offset-background mr-4 bg-white"
              aria-label="Change language to English"
            />
            <ReactCountryFlag
              countryCode="FR"
              title="Français"
              svg
              className="rounded-full cursor-pointer"
              onClick={toggleLanguage}
              aria-label="Change language to French"
            />
          </>
        )}
        <button className="sm:hidden ml-4" onClick={() => setIsOpen(!isOpen)} aria-label={t.ToggleNavigationMenu}>
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>

        <ul className={`absolute top-10 left-0 w-full sm:hidden text-background ${isOpen ? "block" : "hidden"} shadow-md`} aria-label={t.NavigationMenu}>
          {navigation.map((item) => (
            <li className="text-center" key={item.title}>
              <a key={item.title} href={`#${item.ancre}`} className="block px-4 py-2 font-semibold leading-6" onClick={() => setIsOpen(false)} aria-label={`${t.goToSection} ${item.title}`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired
};

export default Header;
