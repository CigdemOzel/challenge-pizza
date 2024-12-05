import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-icons">
        <div className="icons-1">
          <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/1.svg" />
          <p>YENİ! Kore</p>
        </div>
        <div className="icons-2">
          <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/2.svg" />
          <p>Pizza</p>
        </div>
        <div className="icons-3">
          <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/3.svg" />
          <p>Burger</p>
        </div>
        <div className="icons-4">
          <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/4.svg" />
          <p>Kızartmalar</p>
        </div>
        <div className="icons-5">
          <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/5.svg" />
          <p>Fast Food</p>
        </div>
        <div className="icons-6">
          <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/6.svg" />
          <p>Gazlı İçecek</p>
        </div>
      </div>
      <div className="hero-kartlar">
        <img src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/cta/kart-1.png?raw=true" />
      </div>
    </div>
  );
}

export default Hero;
