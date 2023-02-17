import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
  useLocation,
  Navigate
} from "react-router-dom";
import Work from './pages/work';
import About from './pages/about';
// import useLocalStorage from 'use-local-storage';
import Rivet from './pages/rivet';
import Cym from './pages/cym';
import Retro from './pages/retro';
import Resume from './pages/resume';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  const theme = "light";
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // const switchTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  // }
  let location = (useLocation().pathname).substring(1);
  if (location === 'work/cym') {
    location = 'Cultivate Yoga MKE'
  }
  if (location === 'work/rivet') {
    location = 'Rivet Design System'
  }
  if (location === 'work/retro') {
    location = 'Retro Site'
  }

  return (
    <React.Fragment>
      <div id="wrapper" data-theme={theme}>
        <Header />
        <main>

          <h2>{location}</h2>
          <Routes>
            <Route path="" element={<Navigate to="/about" />} />
            <Route path="*" element={<Navigate to="/about" />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="work/rivet" element={<Rivet />} />
            <Route path="work/cym" element={<Cym />} />
            <Route path="work/retro" element={<Retro />} />
            <Route path="resume" element={<Resume />} />
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
