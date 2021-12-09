import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import Footer from './components/FooterComponent/Footer';
import Header from './components/Header/Header';
import Cart from './components/CartComponent/cart';
import Home from './components/HomeComponent/Home';
import Stock from './components/Stock/Stock';
import About from './components/FooterComponent/About-us/about'
import Contacts from './components/Contacts/Contacts';
import Registraction from './components/Auth/Registraction/Registraction';
import SignIn from './components/Auth/Signin/Signin'
const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/stock' element={<Stock />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/auth/signin' element={<SignIn />} />
          <Route exact path='/auth/register' element={<Registraction />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;