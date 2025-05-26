import React from 'react'

function TakeAway() {
  return (
    <>
      <header className="header">
        <img className="logo" src="img/logo3-uitgeknipt beter copy.png" alt="Logo" width="150" />
      </header>
      <a href="index.html" className="payment__back-button">&larr; Back</a>
      <div className="buttons">
        <div
          className="buttons__button"
          onClick={() => (window.location.href = 'menu.html')}
          style={{ cursor: 'pointer' }}
        >
          <img src="img/eat in uitgeknipt.png" alt="Image 1" className="buttons__image" />
          <p className="buttons__text">Eat In</p>
        </div>
        <div
          className="buttons__button"
          onClick={() => (window.location.href = 'menu.html')}
          style={{ cursor: 'pointer' }}
        >
          <img src="img/images.png" alt="Image 2" className="buttons__image" />
          <p className="buttons__text">Take Away</p>
        </div>
      </div>
      <div className="languages">
        <h2 className="languages__title">Select Language</h2>
        <div className="languages__button">English</div>
        <div className="languages__button">Dutch</div>
        <div className="languages__button">French</div>
      </div>
    </>
  )
}

export default TakeAway