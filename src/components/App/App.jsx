import Header from '../Header/index.jsx';
import Informations from '../Informations/index.jsx';
import Resume from '../Resume/index.jsx';
import About from '../About/index.jsx';
import Projects from '../Projects/index.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/index.jsx';
import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='snap-y snap-mandatory'>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Informations />
      <About />
      <Projects />
      <Resume isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
