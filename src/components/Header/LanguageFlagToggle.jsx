import { Expand } from "@theme-toggles/react";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useLanguage } from '../../contexts/languageHooks';

function LanguageFlagToggle({ toggleDarkMode, isDarkMode }) {
    const { toggleLanguage, language } = useLanguage();
    const [isToggled, setToggle] = useState(isDarkMode);
    const { t } = useLanguage();

    useEffect(() => {
        setToggle(isDarkMode);
    }, [isDarkMode]);

    const handleToggle = () => {
        setToggle(!isToggled);
        toggleDarkMode();
    };

    return (
        <div className='flex flex-col gap-5'>
            <Expand toggled={isToggled} toggle={handleToggle} className="" aria-label={t.toggleDarkMode} />
            {language === 'fr' ? (
                <>
                    <ReactCountryFlag
                        countryCode="GB"
                        title="English"
                        svg
                        className="rounded-full cursor-pointer"
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
                        className="rounded-full cursor-pointer ring-2 ring-gray-500 ring-offset-2 ring-offset-background bg-white"
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
        </div>
    );
}

LanguageFlagToggle.propTypes = {
    toggleDarkMode: PropTypes.func,
    isDarkMode: PropTypes.bool
};

export default LanguageFlagToggle;