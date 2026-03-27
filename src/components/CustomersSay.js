import "../styles/CustomersSay.css"

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonial-cards">
        <div className="testimonial">
          <p>⭐⭐⭐⭐⭐</p>
          <img className="profile-pic" alt="Customer-pic" src="../images/Cat1.jpg" />
          <p>James</p>
          <p>Absolutely loved the Greek Salad! Fresh ingredients and amazing flavors. Will definitely come back!</p>
        </div>

        <div className="testimonial">
          <p>⭐⭐⭐⭐</p>
          <img className="profile-pic" alt="Customer-pic" src="../images/Cat2.jpg"/>
          <p>John</p>
          <p>The Lemon Dessert was out of this world. Best Mediterranean food in Chicago!</p>
        </div>

        <div className="testimonial">
          <p>⭐⭐⭐⭐⭐</p>
          <img className="profile-pic" alt="Customer-pic" src="../images/Cat3.jpg"/>
          <p>Michel</p>
          <p>Great food, warm atmosphere, and friendly staff. The bruschetta was a perfect starter!</p>
        </div>

        <div className="testimonial">
          <p>⭐⭐⭐⭐</p>
          <img className="profile-pic" alt="Customer-pic" src="../images/Cat4.jpg" />
          <p>Pele</p>
          <p>A hidden gem in Chicago! Every dish felt homemade and full of love. Highly recommend!</p>
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;