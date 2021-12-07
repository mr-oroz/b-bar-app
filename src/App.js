import React from 'react'
import './App.css';
import Footer from './components/FooterComponent/Footer'
import { Container } from 'react-bootstrap';
import About from './components/FooterComponent/About us/about'


const App = () => {
  return (
    <div className="App">
        <Container>
          <About/>
          <Footer />
        </Container>
    </div>
  );
}

export default App;