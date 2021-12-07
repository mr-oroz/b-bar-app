import React from 'react'
import './App.css';
import Footer from './components/FooterComponent/Footer'
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header'
import About from './components/FooterComponent/About-us/about'


const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <About />
        <Footer />
      </Container>
    </div>
  );
}

export default App;