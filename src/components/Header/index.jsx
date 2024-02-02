import config from "../../data/index.json";

const Header = () => {
  const navigation = config.navigation;
  return (
    <div className="header fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="header__menu">
        <ul className="flex px-4 sm:px-8 lg:px-32 gap-x-10 content-center leading-0 h-10 items-center">
          {navigation.map((item) => (
            <li className="cursor-pointer" key={item.title}>
              <a href={`#${item.title}`}>
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