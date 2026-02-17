import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Success from "./Components/Success";
import AltMenu from "./Components/AltMenu";
import "./App.css";

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar" aria-label="Kategori menüsü">
        <AltMenu />
      </aside>

      <main className="content" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
    </div>
  );
}
