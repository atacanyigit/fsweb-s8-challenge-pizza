import "../pages/AltMenu.css";

const items = [
  { img: "/images/iteration-2-images/icons/1.svg", text: "Yeni" },
  { img: "/images/iteration-2-images/icons/2.svg", text: "Pizza" },
  { img: "/images/iteration-2-images/icons/3.svg", text: "Burger" },
  { img: "/images/iteration-2-images/icons/4.svg", text: "Kızartmalar" },
  { img: "/images/iteration-2-images/icons/5.svg", text: "Fast Food" },
  { img: "/images/iteration-2-images/icons/6.svg", text: "Gazlı İçecek" },
];

export default function AltMenu() {
  return (
    <section className="alt-menu">
      {items.map((item, i) => (
        <div key={i} className="alt-item">
          <img src={item.img} alt={item.text} />
          <span>{item.text}</span>
        </div>
      ))}
    </section>
  );
}