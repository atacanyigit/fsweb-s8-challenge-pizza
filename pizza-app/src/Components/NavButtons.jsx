import "../pages/NavButtons.css";

export default function NavButtons() {
  const items = [
    { icon: "/images/iteration-2-images/icons/1.svg", label: "YENİ! Kore" },
    { icon: "/images/iteration-2-images/icons/2.svg", label: "Pizza" },
    { icon: "/images/iteration-2-images/icons/3.svg", label: "Burger" },
    { icon: "/images/iteration-2-images/icons/4.svg", label: "Kızartmalar" },
    { icon: "/images/iteration-2-images/icons/5.svg", label: "Fast food" },
    { icon: "/images/iteration-2-images/icons/6.svg", label: "Gazlı İçecek" },
  ];

  return (
    <section className="nav-buttons">
      <div className="nav-buttons-inner">
        {items.map((item) => (
          <button className="nav-btn" key={item.label} type="button">
            <img className="nav-btn-icon" src={item.icon} alt={item.label} />
            <span className="nav-btn-text">{item.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}