import React from 'react'

function MenuPage() {
  return (
    <div className="order">
      <div className="order__container">
        <header className="order__header">
          <img src="img/logo3-uitgeknipt beter copy.png" alt="Jetreken Logo" className="order__logo" />
        </header>
        <main className="order__main">
          <h1 className="order__menu-title">Menu</h1>
          <a href="takeAway.html" className="payment__back-button">&larr; Back</a>
          <div className="order__content">
            <nav className="order__sidebar">
              <ul className="sidebar-menu">
                <li className="sidebar-menu__item ">
                  <span className="sidebar-menu__icon">🍟</span>
                  <span className="sidebar-menu__text">Fries</span>
                </li>
                <li className="sidebar-menu__item sidebar-menu__item--active">
                  <span className="sidebar-menu__icon">🍔</span>
                  <span className="sidebar-menu__text">Burgers</span>
                </li>
                <li className="sidebar-menu__item">
                  <span className="sidebar-menu__icon">🍢</span>
                  <span className="sidebar-menu__text">Snacks</span>
                </li>
                <li className="sidebar-menu__item">
                  <span className="sidebar-menu__icon">🥗</span>
                  <span className="sidebar-menu__text">Veggie</span>
                </li>
                <li className="sidebar-menu__item">
                  <span className="sidebar-menu__icon">🥫</span>
                  <span className="sidebar-menu__text">Sauces</span>
                </li>
                <li className="sidebar-menu__item">
                  <span className="sidebar-menu__icon">🥤</span>
                  <span className="sidebar-menu__text">Drinks</span>
                </li>
              </ul>
            </nav>
            <section className="order__products">
              <div className="products-grid">
                <div className="product-card">
                  <div className="product-card__img"><img src="img/hamburger.jpg" alt="Hamburger" /></div>
                  <div className="product-card__name">Hamburger</div>
                  <div className="product-card__price">€4,50</div>
                </div>
                <div className="product-card">
                  <div className="product-card__img"><img src="img/cheeseburger.jpg" alt="Cheese-Burger" /></div>
                  <div className="product-card__name">Cheese-Burger</div>
                  <div className="product-card__price">€4,50</div>
                </div>
                <div className="product-card">
                  <div className="product-card__img"><img src="img/bicky burger.webp" alt="Bicky-Burger" /></div>
                  <div className="product-card__name">Bicky-Burger</div>
                  <div className="product-card__price">€4,50</div>
                </div>
                <div className="product-card">
                  <div className="product-card__img"><img src="img/bicky cheese.jpg" alt="Bicky-Cheese" /></div>
                  <div className="product-card__name">Bicky-Cheese</div>
                  <div className="product-card__price">€4,50</div>
                </div>
                <div className="product-card">
                  <div className="product-card__img"><img src="img/bicky chicken.webp" alt="Bicky-Chicken" /></div>
                  <div className="product-card__name">Bicky-Chicken</div>
                  <div className="product-card__price">€4,50</div>
                </div>
                <div className="product-card">
                  <div className="product-card__img"><img src="img/bicky fish.jpg" alt="Frikandel" /></div>
                  <div className="product-card__name">Bicky-Fish</div>
                  <div className="product-card__price">€4,50</div>
                </div>
                <div className="product-card">
                  <div className="product-card__img"><img src="img/bicky mexicano.jpg" alt="Kroket" /></div>
                  <div className="product-card__name">Bicky-Mexicano</div>
                  <div className="product-card__price">€4,50</div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer className="order__footer">
          <div className="order__order-type">Order-Eat In</div>
          <div className="order__summary">
            <div className="order__total">Total= €9,50</div>
            <button className="order__details-btn" onClick={() => window.location.href='order.html'}>Order details</button>
          </div>
          <button className="order__pay-btn" onClick={() => window.location.href='payment.html'}>Pay</button>
        </footer>
      </div>
    </div>
  )
}

export default MenuPage