import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/languageHooks.js';
import LanguageFlagToggle from './LanguageFlagToggle.jsx';

export default function Example({ toggleDarkMode, isDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const { config, t } = useLanguage();

    const navigation = config.navigation;

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);

        } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
            setIsVisible(true);

        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`text-background fixed top-0 w-full z-10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 button-container">
                    <a href={`#${t.home}`} className="button" onClick={handleLinkClick}>
                        <span className="sr-only">{t.home}</span>
                        <svg
                            className="icon"
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1.2em"
                            width="1.2em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-background"
                        onClick={() => setIsOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.title} href={`#${item.ancre}`} className="text-sm font-semibold leading-6 text-background">
                            {item.title}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">

                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-background">
                                        {t.settingButtonHeader}
                                        <ChevronDownIcon
                                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                            aria-hidden="true"
                                        />
                                    </PopoverButton>

                                    <PopoverPanel
                                        transition
                                        className={`absolute right-0 top-16 text-center z-10 mt-3 max-w-md overflow-hidden rounded-3xl text-background shadow-lg ring-1 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in ${isDarkMode ? 'ring-gray-800' : 'ring-gray-200'}`}
                                    >
                                        <div className="p-4">

                                            <LanguageFlagToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                                        </div>

                                    </PopoverPanel>
                                </>
                            )}
                        </Popover>
                    </PopoverGroup>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={isOpen} onClose={setIsOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className={`fixed inset-y-0 right-0 z-10 w-full overflow-y-auto text-background px-6 py-6 sm:max-w-sm sm:ring-1 ${isDarkMode ? 'sm:ring-gray-600' : 'sm:ring-gray-200'}`}>
                    <div className="flex items-center justify-between sm:hidden">
                        <a href={`#${t.home}`} className="button" onClick={handleLinkClick}>
                            <span className="sr-only">{t.home}</span>
                            <svg
                                className="icon"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1.2em"
                                width="1.2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                ></path>
                            </svg>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-background"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.title}
                                        href={`#${item.ancre}`}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isDarkMode ? "hover:text-black hover:bg-gray-50" : "hover:bg-gray-50"}`}
                                        onClick={handleLinkClick}
                                    >
                                        {item.title}
                                    </a>
                                ))}

                            </div>
                            <div className="py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <DisclosureButton className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-background ${isDarkMode ? "hover:text-black hover:bg-gray-50" : "hover:bg-gray-50"}`}>
                                                {t.settingButtonHeader}
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">

                                                <DisclosureButton
                                                    key={t.name}
                                                    as="a"
                                                    href={t.href}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-background"
                                                    onClick={handleLinkClick}
                                                >
                                                    <LanguageFlagToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                                                </DisclosureButton>

                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>

                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

Example.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};
