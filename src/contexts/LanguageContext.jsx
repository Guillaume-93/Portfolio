import { useState, useEffect } from 'react';
import { LanguageContext } from './languageHooks';
import frenchConfig from '../data/index.fr.json';
import englishConfig from '../data/index.en.json';
import translations from '../data/translations';
import PropTypes from 'prop-types';

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage ? savedLanguage : 'fr';
    });
    const [config, setConfig] = useState(language === 'fr' ? frenchConfig : englishConfig);
    const [t, setT] = useState(translations[language]);

    const toggleLanguage = () => {
        setLanguage((prevLang) => {
            const newLang = prevLang === 'fr' ? 'en' : 'fr';
            localStorage.setItem('language', newLang);
            setConfig(newLang === 'fr' ? frenchConfig : englishConfig);
            setT(translations[newLang]);
            return newLang;
        });
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
            setConfig(savedLanguage === 'fr' ? frenchConfig : englishConfig);
            setT(translations[savedLanguage]);
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, config, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LanguageProvider;
