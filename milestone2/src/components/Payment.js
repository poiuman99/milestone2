import React from 'react'

function Payment() {
  const handleCashClick = () => {
    window.location.href = 'thankYou.html';
  };

  const handleCardClick = () => {
    window.location.href = 'thankYou.html';
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__header">
          <img src="img/logo3-uitgeknipt beter copy.png" className="payment__logo" alt="logo" />
        </div>
        <div className="payment__title">Payment</div>
        <div className="payment__back">
          <a href="menu.html" className="payment__back-button">&larr; Back</a>
        </div>
        <div className="payment__options">
          <div
            className="payment-option"
            onClick={handleCashClick}
            style={{ cursor: 'pointer' }}
          >
            <img src="img/cash.jpeg" className="payment-option__img" alt="Cash" />
            <div className="payment-option__label">Cash</div>
          </div>
          <div
            className="payment-option"
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
          >
            <img src="img/card.jpg" className="payment-option__img" alt="Card" />
            <div className="payment-option__label">Card</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment