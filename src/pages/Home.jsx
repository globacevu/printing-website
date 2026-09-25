import { Link } from "react-router-dom";
import Img from "../assets/business.jpg"
import Image from "../assets/Book.jpg"
import Imge from "../assets/card.jpg"
import Imag from "../assets/Marketing.jpg"


export default function Home() {
  return (
    <main>

      <section className="hero">

        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/videos/printing.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <div className="hero-content">

          <p>PRINT • DESIGN • PUBLISH</p>

          <h1>Bringing Your Ideas to Life</h1>

          <p className="hero-text">
            Professional printing and publishing services for businesses and organizations.
          </p>

         <div className="hero-buttons">
            <Link to="/quote" className="primary">
              Request Quote
            </Link>

            <Link to="/services" className="secondary">
              Our Services
            </Link>
          </div>

        </div>

      </section>

      <section className="home-services">

        <h2>Our Services</h2>

        <div className="grid">

          <div className="card">
            <img src={Imge }alt="" />
            <h3>Business Cards</h3>
          </div>

          <div className="card">
            <img src={Img }alt="" />
            <h3>Custom Packaging</h3>
          </div>

          <div className="card">
           <img src={Image }alt="" />
            <h3>Books</h3>
          </div>

          <div className="card">
            <img src={Imag }alt="" />
            <h3>Marketing Materials</h3>
          </div>

        </div>

      </section>

    </main>
  );
}