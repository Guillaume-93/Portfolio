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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3l9.5 9.5-1.41 1.41L18 11.83V20H6v-8.17L3.91 13.91 2.5 12.5 12 3zm1 5h-2v5h2V8zm-6 6h10v2H7v-2z" />
              </svg>
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
