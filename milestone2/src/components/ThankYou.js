import React from 'react'
import './menu.css';

function ThankYou() {
  return (
<div className="order-screen">
  <div className="order-screen__container">
    <img src="img/logo3-uitgeknipt beter copy.png" alt="Jetreken Logo" className="order-screen__logo" />

    <div className="order-screen__text">
      <p className="order-screen__order">ENJOY YOUR MEAL</p>
      <p className="order-screen__thank-you">Thank you for your order!</p>
    </div>

    <img src="img/frietman3-uitgeknipt.png" alt="Fries Mascot" className="order-screen__mascot" />

    <a href="payment.html" className="order-screen__back-button">← Back</a>
  </div>
</div>
  )
}

export default ThankYou