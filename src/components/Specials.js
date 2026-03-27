import "../styles/Specials.css"

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials</h2>
        <button>Online Menu</button>
      </div>

      <div className="specials-cards">
        <div className="card">
          <div className="card-image">
            <img alt="greek-salad" src="../images/greek salad.jpg"/>
          </div>
          <div className="card-header">
            <h4>Greek Salad</h4>
            <p>$12.99</p>
          </div>
          <p>A refreshing mix of crisp cucumbers, ripe tomatoes, olives, and creamy feta cheese, drizzled with our house olive oil and herbs.</p>
          <button>Order a delivery</button>
        </div>

        <div className="card">
          <div className="card-image">
            <img alt="burchetta" src="../images/bruchetta.svg"/>
          </div>
          <div className="card-header">
            <h4>Burchetta</h4>
            <p>$5.99</p>
          </div>
          <p>Toasted bread topped with a vibrant mix of fresh tomatoes, garlic, basil, and a drizzle of extra virgin olive oil. A classic Italian starter.</p>
          <button>Order a delivery</button>
        </div>

        <div className="card">
          <div className="card-image">
            <img alt="lemon-dessert" src="../images/lemon dessert.jpg"/>
          </div>
          <div className="card-header">
            <h4>Lemon Dessert</h4>
            <p>$5.00</p>
          </div>
          <p>A light and zesty homemade lemon cake, crafted from our grandmother's recipe. The perfect sweet ending to your Mediterranean meal.</p>
          <button>Order a delivery</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;