import React, { useEffect, useState } from "react";
import "./OrderForm.css";

const OrderForm = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCrust, setSelectedCrust] = useState("");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const [orderNote, setOrderNote] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const toppings = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ];

  useEffect(() => {
    setIsFormDisabled(
      selectedSize === "" ||
        selectedCrust === "" || // Hamur seçilmediyse
        (selectedToppings.length > 0 &&
          (selectedToppings.length < 4 || selectedToppings.length > 10)) ||
        name.length < 3 // Ekstra malzeme 4-10 arasında olmalı
    );
  }, [selectedSize, selectedCrust, selectedToppings, name]);

  const handleToppingChange = (topping) => {
    const updatedToppings = selectedToppings.includes(topping)
      ? selectedToppings.filter((item) => item !== topping)
      : [...selectedToppings, topping];

    if (updatedToppings.length <= 10) {
      setSelectedToppings(updatedToppings);
    }
  };
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Sayıyı artır
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Sayıyı azalt
    }
  };

  return (
    <div className="order-form">
      <h2>Position Absolute Acı Pizza</h2>
      <div className="pizza-info">
        <span className="price">85.50₺</span>
        <span className="rating">4.9</span>
        <span className="comments">(200)</span>
      </div>
      <p className="description">
        Frontet Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza
        tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir.. Küçük bir pizzaya bazen pizzetta denir.
      </p>
      <div className="pizza-options">
        <div className="size-options">
          <h3>
            Boyut Seç <span>*</span>
          </h3>
          {["Küçük", "Orta", "Büyük"].map((size) => (
            <label key={size}>
              <input
                type="radio"
                name="size"
                value={size}
                checked={selectedSize === size}
                onChange={() => setSelectedSize(size)}
              />
              {size}
            </label>
          ))}
        </div>
        <div className="crust-options">
          <h3>
            Hamur Seç <span>*</span>
          </h3>
          <select
            name="crust"
            value={selectedCrust}
            onChange={(e) => setSelectedCrust(e.target.value)}
          >
            <option value="">Hamur Kalınlığı</option>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalin">Kalın</option>
          </select>
        </div>
      </div>
      <div className="extra-toppings">
        <h3>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="toppings-list">
          {toppings.map((topping) => (
            <label key={topping}>
              <input
                type="checkbox"
                value={topping}
                checked={selectedToppings.includes(topping)}
                onChange={() => handleToppingChange(topping)}
              />
              {topping}
            </label>
          ))}
        </div>
      </div>
      <div className="customer-name">
        <h3>İsim</h3>
        <input
          type="text"
          placeholder="Adınızı giriniz"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name.length < 3 && name.length > 0 && (
          <p style={{ color: "red" }}>İsim en az 3 karakter olmalıdır.</p>
        )}
      </div>
      <div className="order-note">
        <h3>Sipariş Notu</h3>
        <textarea
          className="note-yazi"
          placeholder="Siparişine eklemek istediğin bir not var mı?"
          rows="4"
          value={orderNote}
          onChange={(e) => setOrderNote(e.target.value)}
        />
      </div>
      <hr></hr>
      <div className="order-info">
        <div class="order-quantity">
          <button class="decrease" onClick={decreaseQuantity}>
            -
          </button>
          <span class="quantity" id="quantity">
            {quantity}
          </span>
          <button class="increase" onClick={increaseQuantity}>
            +
          </button>
        </div>

        <div class="order-summary">
          <h3>Sipariş Toplamı</h3>
          <div>
            <p>
              Seçimler: <span id="pizza-price">25₺</span>
            </p>
            <p className="toplam">
              Toplam: <span id="extra-price">110.50₺</span>
            </p>
          </div>
        </div>
      </div>
      <button disabled={isFormDisabled}>Sipariş Ver</button>
    </div>
  );
};
export default OrderForm;
