import "../pages/CardGrid.css";

export default function CardGrid() {
  const items = [
    {
      title: "YENİ! Kore",
      desc: "Kore Mutfağı",
      img: "/images/iteration-2-images/insta/li-0.png",
    },
    {
      title: "Pizza",
      desc: "Enfes Lezzetler",
      img: "/images/iteration-2-images/insta/li-1.png",
    },
    {
      title: "Burger",
      desc: "Doyurucu Menü",
      img: "/images/iteration-2-images/insta/li-2.png",
    },
    {
      title: "Kızartmalar",
      desc: "Çıtır Çıtır",
      img: "/images/iteration-2-images/insta/li-3.png",
    },
    {
      title: "Fast Food",
      desc: "Hızlı & Lezzetli",
      img: "/images/iteration-2-images/insta/li-4.png",
    },
    {
      title: "İçecek",
      desc: "Soğuk İçecekler",
      img: "/images/iteration-2-images/insta/li-5.png",
    },
  ];

  return (
    <section className="card-grid">
      <div className="card-grid-inner">
        {items.map((item, i) => (
          <div className="grid-card" key={i}>
            <img className="grid-icon" src={item.img} alt={item.title} />
            <div className="grid-text">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}