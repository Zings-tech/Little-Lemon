import "../styles/Chicago.css"

function Chicago() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials, inspired by the family's heritage in the Mediterranean.
        </p>
      </div>

      <div className="about-images">
        <div className="image-placeholder">
          <img alt="restaurant" src="../images/restaurant.jpg"/>
        </div>
        <div className="image-placeholder">
          <img alt="" src="../images/restaurant chef B.jpg"/>
        </div>
      </div>
    </section>
  );
}

export default Chicago;