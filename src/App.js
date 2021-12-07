import React from 'react'
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header'

const App = () => {
  return (
    <div className="App">
        <Container>
          <Header/>
        </Container>
    </div>
  );
}

export default App;
