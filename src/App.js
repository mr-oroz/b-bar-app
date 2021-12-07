import React from 'react'
import './App.css';
import Footer from './components/FooterComponent/Footer'
import Basket from './components/Basket_Components/Basket';
import Order from './components/Order/Order';
import Similar from './components/Similar/Similar';
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

        <h1>Корзина</h1>
      <Basket />
      <Basket />
      <Basket />
      <Order/>
      <div className="h3">
      <h3>С этим также подойдет</h3>
      </div>
      <div className="Simil">
      <Similar/>
      <Similar/>
      <Similar/>
      <Similar/>
      </div>

      </Container>
    </div>
  );
}

export default App;