import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <header className="home-hero" role="banner">
      <div className="hero-content">
       
        <p className="brand" aria-label="Teknolojik Yemekler">
          Teknolojik Yemekler
        </p>

       
        <h1 className="hero-title">
          Kod Acıktırır <br />
          <span className="bold-text">Pizza, Doyurur</span>
        </h1>

        <Link className="order-link" to="/order" aria-label="Sipariş sayfasına git">
           <button type="button" className="order-btn" data-cy="go-order">
            ACIKTIM
           </button>
           
        </Link>
      </div>

      
    </header>
  );
}