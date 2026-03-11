import "../styles/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Logo</div>

      <div className="navigation">
        <h4>Navigation</h4>
        <p>Home</p>
        <p>About</p>
        <p>Menu</p>
        <p>Reservations</p>
        <p>Order Online</p>
        <p>Login</p>
      </div>

      <div className="contact">
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone</p>
        <p>Email</p>
      </div>

      <div className="social-media-links">
        <h4>Social Media Links</h4>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
      </div>
    </footer>
  );
}

export default Footer;