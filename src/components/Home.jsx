import React from "react";
import "./Home.css";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/order");
  };
  return (
    <div className="home-wrapper">
      <div className="background-image"></div>
      <h1>Teknolojik Yemekler</h1>
      <p className="firsat">fırsatı kaçırma</p>
      <p className="ilk-p">KOD ACIKTIRIR</p>
      <p className="ikinci-p">PİZZA, DOYURUR</p>
      <button className="hungry-button" onClick={handleClick}>
        Acıktım
      </button>
      <Hero />
    </div>
  );
}

export default Home;
