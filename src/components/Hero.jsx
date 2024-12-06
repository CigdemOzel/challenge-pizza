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
        <div className="kart-1">
          <img src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/cta/kart-1.png?raw=true" />
          <div className="kart-basligi">
            <span>Özel</span>
            <span>Lezzetus</span>
          </div>
          <div className="kart-p">Position: Absolute Acı Burger</div>
          <button className="siparis-ver">SİPARİŞ VER</button>
        </div>
        <div className="kart-column">
          <div className="kart-2">
            <img src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/cta/kart-2.png?raw=true " />
            <div className="kart-basligi">
              <span>Hackathlon</span>
              <span>Burger Menü</span>
            </div>
            <button className="siparis-ver">SİPARİŞ VER</button>
          </div>
          <div className="kart-3">
            <img src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/cta/kart-3.png?raw=true" />
            <div className="kart-basligi">
              <div className="yan-yana">
                <span className="cok">Çoooook</span>
                <span>hızlı</span>
              </div>
              <span>npm gibi kurye</span>
            </div>
            <button className="siparis-ver">SİPARİŞ VER</button>
          </div>
        </div>
      </div>
      <div className="hero-menuler">
        <p className="egik">en çok paketlenen menüler</p>
        <p className="oneri">Acıktıran Kodlara Doyuran Lezzetler</p>
        <div className="hero-menu-icons">
          <button className="ramen">
            <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/1.svg" />
            <span>Ramen</span>
          </button>
          <button className="pizza">
            <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/2.svg" />
            <span>Pizza</span>
          </button>
          <button className="burger">
            <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/3.svg" />
            <span>Burger</span>
          </button>
          <button className="french-fries">
            <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/4.svg" />
            <span>French Fries</span>
          </button>
          <button className="fast-food">
            <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/5.svg" />
            <span>Fast Food</span>
          </button>
          <button className="soft-drinks">
            <img src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/8f9b6dbeba34ed8e9b45ce243e72feb9bae7be62/images/iteration-2-images/icons/6.svg" />
            <span>Soft Drinks</span>
          </button>
        </div>
        <div className="pizzalar">
          <img
            className="pizza-1"
            src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-1.png?raw=true"
          />

          <img
            className="pizza-2"
            src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-2.png?raw=true"
          />

          <img
            className="pizza-3"
            src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/images/iteration-2-images/pictures/food-3.png?raw=true"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
