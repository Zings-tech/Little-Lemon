import CallToAction from "../components/CallToAction.js";
import Specials from "../components/Specials.js";
import CustomersSay from "../components/CustomersSay.js";
import Chicago from "../components/Chicago.js";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </>
  );
}

export default HomePage;