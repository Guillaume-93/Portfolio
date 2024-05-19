import { useState, useEffect } from "react";
import config from "../../data/index.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = config.navigation;

  useEffect(() => {
    const sectionContent = document.querySelector("section");
    if (sectionContent) {
      if (isOpen) {
        sectionContent.style.marginTop = "150px";
      } else {
        sectionContent.style.marginTop = "0";
      }
    }
  }, [isOpen]);

  return (
    <div className="header fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-8 h-10">
        <div className="flex items-center flex-1">
          <div className="mr-28">
            <a href="#home">
            <img
                src="favicon_io/favicon-32x32.png"
                alt="Home"
                width="32"
                height="32"
              />
            </a>
          </div>
          <ul
            className={`flex-1 justify-start items-center hidden sm:flex gap-x-10`}
          >
            {navigation.map((item) => (
              <li className="cursor-pointer" key={item.title}>
                <a href={`#${item.ancre}`} onClick={() => setIsOpen(false)}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
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
        <ul
          className={`absolute top-10 left-0 w-full sm:hidden ${
            isOpen ? "block" : "hidden"
          } bg-white shadow-md`}
        >
          {navigation.map((item) => (
            <li className="text-center" key={item.title}>
              <a
                href={`#${item.ancre}`}
                className="block px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
