import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Teknolojik Yemekler</h1>
      <div className="nav">
        <nav>
          <a href="#">Anasayfa </a>
          <p> - </p>
          <a href="#" style={{ fontWeight: "bold" }}>
            {" "}
            Sipariş Oluştur
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
