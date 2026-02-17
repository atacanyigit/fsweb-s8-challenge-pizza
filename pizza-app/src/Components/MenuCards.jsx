import "../pages/MenuCards.css";

export default function MenuCards() {
  const cards = [
    {
      title: "Terminal Pizza",
      desc: "Enfes lezzet, terminal hızında!",
      img: "/images/iteration-2-images/pictures/food-1.png",
    },
    {
      title: "Position Absolute Acı Pizza",
      desc: "Acı severlere özel!",
      img: "/images/iteration-2-images/pictures/food-2.png",
    },
    {
      title: "useEffect Burger",
      desc: "Bağımlılık yapar :)",
      img: "/images/iteration-2-images/pictures/food-3.png",
    },
  ];

  return (
    <section className="menu-cards">
      <div className="menu-cards-inner">
        <h2 className="menu-cards-title">En çok paketlenen menüler</h2>

        <div className="menu-cards-grid">
          {cards.map((c) => (
            <article className="menu-card" key={c.title}>
              <img className="menu-card-img" src={c.img} alt={c.title} />
              <div className="menu-card-body">
                <h3 className="menu-card-h">{c.title}</h3>
                <p className="menu-card-p">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}