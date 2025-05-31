import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>
            Teknolojik
            <br />
            Yemekler
          </h2>
          <div className="left-container">
            <div className="footer-item">
              <img src="/icons/icon-1.png" className="location" />
              <p>
                341 Londonderry Road,
                <br />
                İstanbul Türkiye
              </p>
            </div>
            <div className="footer-item">
              <img src="/icons/icon-2.png" className="mail" />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="footer-item">
              <img src="/icons/icon-3.png" className="phone" />
              <p>+90 216 123 45 67</p>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <h4>Hot Menu</h4>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Instagram</h4>
          <div className="footer-insta">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img key={i} src={`/insta/li-${i}.png`} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
      </div>
    </footer>
  );
}

export default Footer;
