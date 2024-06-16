// src/contexts/LanguageContext.jsx
import { useState, useEffect } from 'react';
import { LanguageContext } from './languageHooks';
import frenchConfig from '../data/index.fr.json';
import englishConfig from '../data/index.en.json';
import translations from '../data/translations';
import PropTypes from 'prop-types';

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');
    const [config, setConfig] = useState(frenchConfig);
    const [t, setT] = useState(translations.fr);

    const toggleLanguage = () => {
        setLanguage((prevLang) => {
            const newLang = prevLang === 'fr' ? 'en' : 'fr';
            setConfig(newLang === 'fr' ? frenchConfig : englishConfig);
            setT(translations[newLang]);
            return newLang;
        });
    };

    useEffect(() => {
        setConfig(language === 'fr' ? frenchConfig : englishConfig);
        setT(translations[language]);
    }, [language]);

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
