import React from "react";
import PizzaList from "../components/PizzaList";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import CategoryBar from "../components/CategoryBar";
import Campaigns from "../components/Campaigns";
import ProductsSection from "../components/ProductsSection";
import Footer from "../components/Footer";

const Container = styled.div`
  background-color: rgb(247, 247, 247);
`;

function Home() {
  return (
    <Container>
      <div className="home-container">
        <HeroSection />
        <CategoryBar />
        <Campaigns />
        <ProductsSection />
        <PizzaList />
        <Footer />
      </div>
    </Container>
  );
}

export default Home;
