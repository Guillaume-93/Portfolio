import { useEffect, useState } from 'react';
import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header2.jsx';
import Informations from '../Informations/Informations2.jsx';
import Projects from '../Projects/Projects.jsx';
import Resume from '../Resume/Resume.jsx';

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
      <About isDarkMode={isDarkMode}/>
      <Projects isDarkMode={isDarkMode} />
      <Resume isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
