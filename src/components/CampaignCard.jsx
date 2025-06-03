import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1rem;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.5rem;
  color: ${(props) => props.textColor || "white"};
  z-index: 1;

  h3 {
    font-size: ${(props) => (props.variant === "left" ? "2.5rem" : "1.3rem")};
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-family: ${(props) =>
      props.variant === "left" ? "Quattrocento" : "Barlow"};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    font-family: Barlow;
  }

  button {
    position: absolute;
    background-color: white;
    color: red;
    font-size: 10px;
    padding: 12px 20px;
    border: none;
    border-radius: 15px;
    font-weight: 600;
    margin-top: 1rem;
  }
`;

function CampaignCard({ title, desc, bg, variant, textColor }) {
  return (
    <Card>
      <BackgroundImage src={bg} alt="kampanya görseli" />
      <TextOverlay variant={variant} textColor={textColor}>
        <h3>{title}</h3>
        {desc && <p>{desc}</p>}
        <button>SİPARİŞ VER</button>
      </TextOverlay>
    </Card>
  );
}

export default CampaignCard;
