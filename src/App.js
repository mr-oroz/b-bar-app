import React from 'react'
import './App.css';
import Footer from './components/FooterComponent/Footer'
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header'
import Cart from './components/CartComponent/cart'
import { Routes, Route } from 'react-router';
import Home from './components/HomeComponent/Home';
import Entry from './components/Entry/Entry';

const App = () => {
  return (
    <div className="App">
      <Container>
        {/* <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer /> */}
        <Entry />
      </Container>
    </div>
  );
}

export default App;