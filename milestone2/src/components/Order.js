import React from 'react'

function Order() {
  return (
    <>
      <div className="container">
        <img src="img/logo3-uitgeknipt beter copy.png" alt="Jelresen logo" className="logo" />

        <h1>Order details</h1>

        <div className="item">
          <span>1: hamburger-€4,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: small fries-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: coca cola-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: coca cola-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: coca cola-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: coca cola-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: coca cola-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: coca cola-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: coca cola-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: cofsqdfa-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: cofqsdsfa-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: cdsdfsola-€2,50</span>
          <button className="remove">Remove</button>
        </div>
        <div className="item">
          <span>1: fanta
            -€2,50</span>
          <button className="remove">Remove</button>
        </div>
      </div>

      <footer className="order__footer">
        <div className="order__order-type">Order-Eat In</div>
        <div className="order__summary">
          <div className="order__total">Total= €9,50</div>
          <button
            className="order__details-btn"
            onClick={() => window.location.href = 'menu.html'}
          >
            Back
          </button>
        </div>
        <button
          className="order__pay-btn"
          onClick={() => window.location.href = 'payment.html'}
        >
          Pay
        </button>
      </footer>
    </>
  )
}

export default Order