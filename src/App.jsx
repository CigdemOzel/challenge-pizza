import React from "react";
import Header from "./components/Header";
import OrderForm from "./pages/OrderForm";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/OrderConfirmation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/order"
        element={
          <>
            <Header />
            <OrderForm />
          </>
        }
      />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
    </Routes>
  );
}

export default App;
