import React from "react";
import styled from "styled-components";
import { pizzaData } from "../data/pizzaData";
import PizzaCard from "./PizzaCard";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
`;

function PizzaList() {
  return (
    <ListContainer>
      {pizzaData.map((item) => (
        <PizzaCard key={item.id} pizza={item} />
      ))}
    </ListContainer>
  );
}

export default PizzaList;
