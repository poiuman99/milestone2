import React from 'react'

function StartPage() {
return (
    <section className="order-screen" >
        <div className="order-screen__container" onclick="location.href='takeAway.html';" style={{ cursor: 'pointer' }}>
            <img src="img/logo3-uitgeknipt beter copy.png" alt="Jetreken Logo" className="order-screen__logo" />

            <div className="order-screen__text">
                <p className="order-screen__order">ORDER</p>
                <p className="order-screen__here">HERE</p>
            </div>

            <img src="img/frietman3-uitgeknipt.png" alt="Fries Mascot" className="order-screen__mascot" />

            <p className="order-screen__instruction">Click anywhere on the screen.</p>
        </div>
    </section>
)
}

export default StartPage