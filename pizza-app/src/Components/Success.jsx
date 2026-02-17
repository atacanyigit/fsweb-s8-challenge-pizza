import { Link, useLocation, Navigate } from "react-router-dom";
import "../pages/Success.css";

export default function Success() {
  const { state } = useLocation();
  const orderData = state;

  
  if (!orderData) {
    return <Navigate to="/" replace />;
  }

  const size = orderData.boyut ?? orderData.size ?? "-";
  const dough = orderData.hamur ?? orderData.dough ?? "-";
  const ingredientsArr =
    orderData.malzemeler ?? orderData.ingredients ?? [];

  const count = orderData.adet ?? orderData.count ?? 1;

  const basePrice = 85.5;
  const ingredientPrice = 5;

  const selections = ingredientsArr.length * ingredientPrice * count;
  const total = (basePrice + ingredientsArr.length * ingredientPrice) * count;

  return (
    <div className="success-page">
      <header className="order-header">
        <div className="order-header-inner">
          <p className="brand">Teknolojik Yemekler</p>
        </div>
      </header>

      <main className="success-content" aria-labelledby="success-title">
        <section className="success-message" role="status" aria-live="polite">
          <p className="yellow-text">lezzetin yolda</p>
          <h1 id="success-title" className="success-title">
            SİPARİŞ ALINDI!
          </h1>
        </section>

        <hr className="divider" />

        <section className="order-summary-box" aria-label="Sipariş özeti">
          <h2>Position Absolute Acı Pizza</h2>

          <div className="summary-details">
            <p>
              Boyut: <strong>{size}</strong>
            </p>
            <p>
              Hamur: <strong>{dough}</strong>
            </p>
            <p>
              Ek Malzemeler:{" "}
              <strong>{ingredientsArr.length ? ingredientsArr.join(", ") : "-"}</strong>
            </p>
            <p>
              Adet: <strong>{count}</strong>
            </p>
          </div>

          <div className="total-box" aria-label="Fiyat özeti">
            <h3>Sipariş Toplamı</h3>
            <div className="price-row">
              <span>Seçimler</span>
              <span>{selections.toFixed(2)}₺</span>
            </div>
            <div className="price-row total">
              <span>Toplam</span>
              <span>{total.toFixed(2)}₺</span>
            </div>
          </div>
        </section>

        <div className="success-actions">
          <Link className="home-link" to="/" aria-label="Anasayfaya dön">
            Anasayfaya Dön
          </Link>
        </div>
      </main>
    </div>
  );
}