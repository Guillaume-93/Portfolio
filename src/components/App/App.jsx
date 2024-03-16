import Header from '../Header/index.jsx'
import Informations from '../Informations/index.jsx';
import About from '../About/index.jsx';
import Projects from '../Projects/index.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/index.jsx';

function App() {


  return (
    <div className='snap-y snap-mandatory'>
      <Header />
      <Informations />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
