import React from 'react';
import './App.scss';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Work from './pages/work';
import About from './pages/about';
import Nav from './components/nav';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Nav />
        <main>
          <h2>Title</h2>
          <Routes>
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Options />
      <Footer />
    </React.Fragment>
  );
}

function Options() {
  return (
    <div className="options">
    </div>
  )
}

export default App;
