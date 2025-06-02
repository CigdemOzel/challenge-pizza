import React from "react";
import styled from "styled-components";
import { categoryData } from "../data/categories";

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem;
  background-color: #fff;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    padding: 1rem;
  }
`;

const Category = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  width: 70px;
  min-width: 70px;
  transition: transform 0.2s ease;
  margin-right: 1rem;

  img {
    width: 30px;
    height: auto;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.8rem;
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    color: #292929;
    white-space: nowrap;
  }
`;

function CategoryBar() {
  return (
    <Bar>
      {categoryData.map((cat, index) => (
        <Category key={index}>
          <img src={cat.icon} alt={cat.label} />
          <span>{cat.label}</span>
        </Category>
      ))}
    </Bar>
  );
}

export default CategoryBar;
