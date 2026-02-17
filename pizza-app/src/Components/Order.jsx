import { useId, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../pages/Order.css";

const ingredientList = [
  "Pepperoni",
  "Mantar",
  "Zeytin",
  "Biber",
  "Mısır",
  "Soğan",
  "Sucuk",
  "Peynir",
  "Ananas",
  "Jalapeno",
];

const boyutSecenekleri = ["Küçük", "Orta", "Büyük"];
const hamurSecenekleri = ["İnce", "Orta", "Kalın"];

export default function Order() {
  const navigate = useNavigate();

  
  const nameId = useId();
  const doughId = useId();
  const noteId = useId();

  const sizeErrorId = useId();
  const doughErrorId = useId();
  const nameErrorId = useId();
  const ingErrorId = useId();
  const submitErrorId = useId();

  const [form, setForm] = useState({
    name: "",
    size: "",
    dough: "",
    note: "",
    count: 1,
    ingredients: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const setField = (key) => (e) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleIngredient = (item, checked) => {
    setForm((prev) => {
      const has = prev.ingredients.includes(item);

      if (checked && !has) {
        if (prev.ingredients.length >= 10) return prev;
        return { ...prev, ingredients: [...prev.ingredients, item] };
      }

      if (!checked && has) {
        return {
          ...prev,
          ingredients: prev.ingredients.filter((x) => x !== item),
        };
      }

      return prev;
    });
  };

  const errors = useMemo(() => {
    return {
      name: form.name.trim().length < 3,
      size: !form.size,
      dough: !form.dough,
      ingredients: form.ingredients.length < 4 || form.ingredients.length > 10,
    };
  }, [form.name, form.size, form.dough, form.ingredients]);

  const isFormValid =
    !errors.name && !errors.size && !errors.dough && !errors.ingredients && !isSubmitting;

  const tabanFiyat = 85.5;
  const ekFiyat = 5;
  const selectionsPrice = form.ingredients.length * ekFiyat * form.count;
  const toplamFiyat = (tabanFiyat + form.ingredients.length * ekFiyat) * form.count;

  const dec = () => setForm((p) => ({ ...p, count: Math.max(1, p.count - 1) }));
  const inc = () => setForm((p) => ({ ...p, count: p.count + 1 }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmitError("");

    if (!isFormValid) {
      setSubmitError("Lütfen zorunlu alanları doğru doldurun.");
      return;
    }

    const payload = {
      isim: form.name.trim(),
      boyut: form.size,
      hamur: form.dough,
      malzemeler: form.ingredients,
      ozel: form.note.trim(),
      adet: form.count,
    };

    try {
      setIsSubmitting(true);

      const res = await axios.post("https://reqres.in/api/pizza", payload, {
        headers: { "x-api-key": "reqres-free-v1" },
      });

      navigate("/success", { state: res.data });
    } catch (err) {
      console.warn(err);
      setSubmitError("Şu an sipariş gönderilemedi. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showNameError = submitted && errors.name;
  const showSizeError = submitted && errors.size;
  const showDoughError = submitted && errors.dough;
  const showIngError = submitted && errors.ingredients;
  const showSubmitError = submitted && !!submitError;

  return (
    <div className="order-page">
      <header className="order-header">
        <div className="order-header-inner">
          <p className="brand">Teknolojik Yemekler</p>

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Anasayfa</Link> <span aria-hidden="true">-</span>{" "}
            <strong>Sipariş Oluştur</strong>
          </nav>
        </div>
      </header>

      <main className="order-main">
        <section className="pizza-info" aria-labelledby="pizza-title">
          <h1 id="pizza-title" className="pizza-title">
            Position Absolute Acı Pizza
          </h1>

          <div className="pizza-meta">
            <div className="pizza-price">85.50₺</div>
            <div className="pizza-rating" aria-label="Puan 4.9, 200 değerlendirme">
              <span>4.9</span>
              <span className="muted">(200)</span>
            </div>
          </div>

          <p className="pizza-describe">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...
          </p>
        </section>

        <div className="order-grid">
          <section className="form-card" aria-label="Sipariş formu">
            <form onSubmit={handleSubmit} className="order-form" noValidate>
              
              <div className="row-2">
                <fieldset className="field" aria-describedby={showSizeError ? sizeErrorId : undefined}>
                  <legend className="label">
                    Boyut Seç <span className="req">*</span>
                  </legend>

                  <div className="radio-col" role="radiogroup" aria-required="true">
                    {boyutSecenekleri.map((opt) => (
                      <label key={opt} className="radio">
                        <input
                          data-cy={`size-${opt}`}
                          type="radio"
                          name="size"
                          value={opt}
                          checked={form.size === opt}
                          onChange={setField("size")}
                          aria-invalid={showSizeError ? "true" : "false"}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>

                  {showSizeError && (
                    <p id={sizeErrorId} className="error" role="alert">
                      Boyut seçmelisin.
                    </p>
                  )}
                </fieldset>

                <div className="field">
                  <label className="label" htmlFor={doughId}>
                    Hamur Seç <span className="req">*</span>
                  </label>

                  <select
                    id={doughId}
                    data-cy="dough-select"
                    className="select"
                    value={form.dough}
                    onChange={setField("dough")}
                    aria-invalid={showDoughError ? "true" : "false"}
                    aria-describedby={showDoughError ? doughErrorId : undefined}
                    required
                  >
                    <option value="">Hamur Kalınlığı</option>
                    {hamurSecenekleri.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>

                  {showDoughError && (
                    <p id={doughErrorId} className="error" role="alert">
                      Hamur seçmelisin.
                    </p>
                  )}
                </div>
              </div>

              {/* İSİM */}
              <div className="field">
                <label className="label" htmlFor={nameId}>
                  İsim <span className="req">*</span>
                </label>

                <input
                  id={nameId}
                  data-cy="name-input"
                  className="input"
                  type="text"
                  value={form.name}
                  onChange={setField("name")}
                  aria-invalid={showNameError ? "true" : "false"}
                  aria-describedby={showNameError ? nameErrorId : undefined}
                  minLength={3}
                  required
                  placeholder="Adınız"
                  autoComplete="name"
                />

                {showNameError && (
                  <p id={nameErrorId} className="error" role="alert">
                    İsim en az 3 karakter olmalı.
                  </p>
                )}
              </div>

             
              <fieldset
                className="field"
                aria-describedby={showIngError ? ingErrorId : undefined}
              >
                <legend className="label">
                  Ek Malzemeler <span className="muted">(En az 5, en fazla 10)</span>
                </legend>
                <p className="hint muted">En fazla 10 malzeme seçebilirsiniz. 5₺</p>

                <div className="checkbox-grid">
                  {ingredientList.map((item) => {
                    const checked = form.ingredients.includes(item);
                    const disabled = !checked && form.ingredients.length >= 10;

                    return (
                      <label key={item} className="check">
                        <input
                          data-cy={`ing-${item}`}
                          type="checkbox"
                          checked={checked}
                          disabled={disabled}
                          onChange={(e) => toggleIngredient(item, e.target.checked)}
                          aria-disabled={disabled ? "true" : "false"}
                        />
                        {item}
                      </label>
                    );
                  })}
                </div>

                {showIngError && (
                  <p id={ingErrorId} className="error" role="alert">
                    Lütfen 5 ile 10 arası malzeme seçin.
                  </p>
                )}
              </fieldset>

              
              <div className="field">
                <label className="label" htmlFor={noteId}>
                  Sipariş Notu
                </label>
                <textarea
                  id={noteId}
                  data-cy="note-input"
                  className="textarea"
                  value={form.note}
                  onChange={setField("note")}
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                />
              </div>

              
              <div className="count-row" aria-label="Adet seçimi">
                <button
                  type="button"
                  className="count-btn"
                  onClick={dec}
                  aria-label="Adeti azalt"
                >
                  -
                </button>
                <div className="count" aria-live="polite">
                  {form.count}
                </div>
                <button
                  type="button"
                  className="count-btn"
                  onClick={inc}
                  aria-label="Adeti artır"
                >
                  +
                </button>
              </div>

              {showSubmitError && (
                <p id={submitErrorId} className="error" role="alert">
                  {submitError}
                </p>
              )}

              <button
                data-cy="submit-btn"
                type="submit"
                className="submit-btn"
                disabled={!isFormValid}
              >
                {isSubmitting ? "Gönderiliyor..." : "SİPARİŞ VER"}
              </button>
            </form>
          </section>

          <aside className="summary-card" aria-label="Sipariş özeti">
            <h2 className="summary-title">Sipariş Toplamı</h2>

            <div className="summary-row">
              <span className="muted">Seçimler</span>
              <span>{selectionsPrice.toFixed(2)}₺</span>
            </div>

            <div className="summary-row total">
              <span>Toplam</span>
              <span>{toplamFiyat.toFixed(2)}₺</span>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}