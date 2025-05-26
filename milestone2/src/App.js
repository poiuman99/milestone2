// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Algemene CSS

import Header from './components/Header'; // Maak deze component van je header HTML
import Footer from './components/Footer'; // Maak deze component van je footer HTML

// Importeer je nieuwe "pagina"-componenten
import HomePage from './components/StartPage'; // Inhoud van je originele index.html
import MenuPage from './components/MenuPage';
import OrderPage from './components/Order';
import PaymentPage from './components/Payment';
import ThankYouPage from './components/ThankYou';
import TakeAwayPage from './components/TakeAway';


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Je algemene header */}

        <Routes>
          {/* Definieer routes voor elke "pagina" */}
          <Route path="/" element={<StartPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/takeaway" element={<TakeAway />} />
          <Route path="/thankyou" element={<ThankYou />} />
          {/* Voeg hier routes toe voor al je andere HTML-bestanden */}
        </Routes>

        <Footer /> {/* Je algemene footer */}
      </div>
    </Router>
  );
}

export default App;