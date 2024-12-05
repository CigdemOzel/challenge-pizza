import React from "react";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import Home from "./components/Home";
import OrderConfirmation from "./components/OrderConfirmation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={
            <>
              <Header /> {/* Header sadece bu rota için render edilecek */}
              <OrderForm /> {/* OrderForm burada render edilecek */}
            </>
          }
        />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />{" "}
        {/* OrderConfirmation sayfası */}
      </Routes>
    </Router>
  );
}

export default App;
