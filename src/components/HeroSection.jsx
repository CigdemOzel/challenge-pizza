import React from "react";
import styled from "styled-components";
import banner from "../assets/home-banner.png";

const Hero = styled.section`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  gap: 1rem;
`;

const Logo = styled.h1`
  color: white;
  font-size: 2.2rem;
  font-family: "Londrina Solid", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Tagline = styled.p`
  font-family: "Satisfy", cursive;
  color: #fdc913;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Slogan = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  color: white;
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Button = styled.button`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1rem;
  color: black;
  background-color: #fdc913;
  border: none;
  border-radius: 2rem;
  padding: 0.6rem 2.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 2rem;
  }
`;

function HeroSection() {
  return (
    <Hero>
      <Logo>Teknolojik Yemekler</Logo>
      <Tagline>fırsatı kaçırma</Tagline>
      <Slogan>
        KOD ACIKTIRIR
        <br />
        PİZZA DOYURUR
      </Slogan>
      <Button>ACIKTIM</Button>
    </Hero>
  );
}

export default HeroSection;
