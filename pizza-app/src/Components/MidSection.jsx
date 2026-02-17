import "../pages/MidSection.css";

export default function MidSection() {
  return (
    <section className="mid-section">
      <div className="mid-inner">
        <div className="mid-left">
          <h2 className="mid-title">Özel Lezzetus</h2>
          <p className="mid-subtitle">
            Position: Absolute Acı Burger
          </p>

          <button className="mid-btn">Sipariş Ver</button>
        </div>

        <div className="mid-right">
          <img
            className="mid-img"
            src="/images/iteration-2-images/pictures/food-3.png"
            alt="Burger"
          />
        </div>
      </div>
    </section>
  );
}