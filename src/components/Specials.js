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
          <h4>Greek Salad</h4>
          <p className="price">$12.99</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>Order a delivery</button>
        </div>

        <div className="card">
          <div className="card-image">Image</div>
          <h4>Bruschetta</h4>
          <p className="price">$7.99</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>Order a delivery</button>
        </div>

        <div className="card">
          <div className="card-image">Image</div>
          <h4>Lemon Dessert</h4>
          <p className="price">$5.99</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <button>Order a delivery</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;