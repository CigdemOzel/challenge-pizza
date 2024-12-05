import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/order");
  };
  return (
    <div className="home-wrapper">
      <div className="background-image"></div> {/* Arka plan resmi burada */}
      <h1>Teknolojik Yemekler</h1>
      <p className="ilk-p">KOD ACIKTIRIR</p>
      <p className="ikinci-p">PİZZA, DOYURUR</p>
      <button className="hungry-button" onClick={handleClick}>
        Acıktım
      </button>
    </div>
  );
}

export default Home;
