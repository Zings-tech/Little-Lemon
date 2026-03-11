import "../styles/CustomersSay.css"

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonial-cards">
        <div className="testimonial">
          <p>⭐⭐⭐⭐⭐</p>
          <img className="profile-pic" />
          <p>Name</p>
          <p>Review text</p>
        </div>

        <div className="testimonial">
          <p>⭐⭐⭐⭐</p>
          <img className="profile-pic" />
          <p>Name</p>
          <p>Review text</p>
        </div>

        <div className="testimonial">
          <p>⭐⭐⭐⭐⭐</p>
          <img className="profile-pic" />
          <p>Name</p>
          <p>Review text</p>
        </div>

        <div className="testimonial">
          <p>⭐⭐⭐⭐</p>
          <img className="profile-pic" />
          <p>Name</p>
          <p>Review text</p>
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;