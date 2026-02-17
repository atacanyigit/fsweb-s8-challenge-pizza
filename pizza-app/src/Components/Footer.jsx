import "../pages/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
       
        <div className="footer-brand">
          <img
            className="footer-logo"
            src="/images/iteration-2-images/footer/logo-footer.svg"
            alt="Teknolojik Yemekler"
          />
          <p className="footer-text">
            Teknolojik Yemekler ile en lezzetli seçenekler kapında!
          </p>
        </div>

       
        <div className="footer-col">
          <h4 className="footer-title">Menü</h4>
          <ul className="footer-list">
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutluluk</li>
          </ul>
        </div>

        
        <div className="footer-col">
          <h4 className="footer-title">Instagram</h4>
          <div className="footer-insta">
            <img
              src="/images/iteration-2-images/footer/insta/li-0.png"
              alt="insta-0"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-1.png"
              alt="insta-1"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-2.png"
              alt="insta-2"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-3.png"
              alt="insta-3"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-4.png"
              alt="insta-4"
            />
            <img
              src="/images/iteration-2-images/footer/insta/li-5.png"
              alt="insta-5"
            />
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© 2026 Teknolojik Yemekler</p>
        <div className="footer-icons">
          <img
            src="/images/iteration-2-images/footer/icons/icon-1.png"
            alt="icon-1"
          />
          <img
            src="/images/iteration-2-images/footer/icons/icon-2.png"
            alt="icon-2"
          />
          <img
            src="/images/iteration-2-images/footer/icons/icon-3.png"
            alt="icon-3"
          />
        </div>
      </div>
    </footer>
  );
}