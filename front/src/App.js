import './App.css';
import React from 'react';
import Header from './components/layouts/Header';
import Home from './components/Home';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
