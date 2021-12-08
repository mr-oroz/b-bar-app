import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import Footer from './components/FooterComponent/Footer';
import Header from './components/Header/Header';
import Cart from './components/CartComponent/cart';
import Home from './components/HomeComponent/Home';
import Registraction from './components/Registraction/Registraction';


const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Container>
      <Registraction />
    </div>
  );
}

export default App;