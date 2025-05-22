// src/App.js
import React from 'react';
import './App.css'; // Algemene App CSS
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Hier komen je andere componenten, bijv. */}
      <main>
        {/* <About /> */}
        {/* <Services /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;