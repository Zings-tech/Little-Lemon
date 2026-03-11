import "../styles/CallToAction.css"

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. From our famous hummus to our charcoal-grilled kebabs, every dish is crafted with fresh, local ingredients and a touch of Chicago soul
        </p>

        <button>Start Free Trial</button>
      </div>

      <div className="hero-image">
        <div className="image-placeholder">Image</div>
      </div>
    </section>
  );
}

export default CallToAction;