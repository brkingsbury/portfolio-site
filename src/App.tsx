import React from 'react';
import './App.scss';

function App() {
  return (
    <React.Fragment>
    {/* <Header name={this.state.name} /> */}
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

function Header() {
  return (
    <header>
      <h1></h1>
    </header>
  )
}

function Main() {
  return (
    <main>
      <p>Important stuff goes here..</p>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <p>Made with React - 1 Hacker Way Menlo Park, CA 94025</p>
    </footer>
  )
}

export default App;
