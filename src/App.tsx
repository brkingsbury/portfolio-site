import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Work from './pages/work';
import About from './pages/about';
import Nav from './components/nav';
import Header from './components/header';
import Footer from './components/footer';
import Options from './components/options';
import useLocalStorage from 'use-local-storage';
import Rivet from './pages/rivet';
import Cym from './pages/cym';


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  let location = (useLocation().pathname).substring(1);
  if (location === 'cym') {
    location = 'Cultivate Yoga MKE'
  }
  return (
    <React.Fragment>
      <div id="wrapper" data-theme={theme}>
        <Header />
        <Nav />
        <main>

          <h2>{location}</h2>
          <Routes>
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="rivet" element={<Rivet />} />
            <Route path="cym" element={<Cym />} />
          </Routes>
        </main>
        {/* <Options /> */}
        {/* <div className="options">
          <button onClick={switchTheme}>{theme}</button>
        </div> */}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
