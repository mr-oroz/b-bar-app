import React from 'react'
import './App.css';
import Footer from './components/FooterComponent/Footer'
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header'
import Cart from './components/CartComponent/cart'
import { Routes, Route } from 'react-router';
import Home from './components/HomeComponent/Home';
import Contacts from './components/Contacts/Contacts';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/contacts' element={<Contacts/>}/>
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;