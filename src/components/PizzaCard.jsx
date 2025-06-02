import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
`;

const Image = styled.img`
  width: 190px;
  height: auto;
  border: 1px solid white;
  border-radius: 12px;
`;

const Name = styled.h3`
  font-size: 1rem;
  margin: 1rem 0 0.5rem 0;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  color: #292929;
  text-align = left;
  margin-left: 0;
  width: 100%;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 11px;
  font-family: "Barlow", sans-serif;
  color: #292929;
  font-weight: 500;
`;

const Price = styled.span`
  font-weight: 700;
  color: #292929;
  font-size: 14px;
  font-family: "Barlow", sans-serif;
`;

function PizzaCard({ pizza }) {
  const { image, name, rating, comments, price } = pizza;

  return (
    <Card>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
      <Info>
        <span>{rating}</span>
        <span>({comments})</span>
        <Price>{price}₺</Price>
      </Info>
    </Card>
  );
}

export default PizzaCard;
