import { BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './hooks/useDarkMode';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Technologies from './components/sections/Technologies';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Layout>
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </Layout>
      </Router>
    </DarkModeProvider>
  );
}

export default App;