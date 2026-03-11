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
          <div className="card-image">Image</div>
          <div className="card-header">
            <h4>Greek Salad</h4>
            <p>$12.99</p>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>Order a delivery</button>
        </div>

        <div className="card">
          <div className="card-image">Image</div>
          <div className="card-header">
            <h4>Burchetta</h4>
            <p>$5.99</p>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>Order a delivery</button>
        </div>

        <div className="card">
          <div className="card-image">Image</div>
          <div className="card-header">
            <h4>Lemon Dessert</h4>
            <p>$5.00</p>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>Order a delivery</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;