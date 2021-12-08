import React from 'react'
import './App.css';
import Footer from './components/FooterComponent/Footer'
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header'
import Cart from './components/CartComponent/cart'
import { Routes, Route } from 'react-router';
import Home from './components/HomeComponent/Home';
import Stock from './components/Stock/Stock';
import About from './components/FooterComponent/About-us/about'
import Contacts from './components/Contacts/Contacts';
import Entry from './components/Entry/Entry';


  
const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route  exact path='/about' element={<About />}/>
          <Route exact path='/stock' element={<Stock />} />
          <Route exact path='/contacts' element={<Contacts/>}/>
          <Route exact path='/auth/sigin' element={<Entry/>}/>
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;