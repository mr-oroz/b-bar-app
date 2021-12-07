import React from 'react'
import './App.css';
import Basket from './components/Basket_Components/Basket';
import Order from './components/Order/Order';
import Similar from './components/Similar/Similar';
import Carusel from './components/Carusel/HomeSlider';
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <div className="App">
      <Container>
        {/* <h1>Корзина</h1>
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
      </div> */}
      <Carusel/>
      </Container>
    </div>
  );
}

export default App;
