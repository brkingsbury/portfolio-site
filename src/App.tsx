import React from 'react';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      {/* <Header name={this.state.name} /> */}
      <Header />
      <Nav />
      <Main title="Work" />
      <Options />
      <Footer />
    </React.Fragment>
  );
}

function Header() {
  return (
    <header>
      <h1>Brian<br />Kingsbury</h1>
      <p>UX Developer</p>
    </header>
  )
}

function Card(props: any) {
  return (
    <div className="card">
      <p>{props.txt}</p>
    </div>
  )
}

function Nav() {
  return (
    <nav>
      <a>About</a>
      <a>Work</a>
      <a>Resume</a>
    </nav>
  )
}

function Main(props:any) {
  return (
    <main>
      <h2>{props.title}</h2>
      <Card txt="Hello there" />
      <Card txt="No there" />
      <Card txt="There be" />
    </main>
  )
}

function Options() {
  return (
    <div className="options">
    </div>
  )
}

function Footer() {
  return (
    <footer>
    </footer>
  )
}

export default App;
