import React from "react";
import styled from "styled-components";
import { categoryData } from "../data/categories";

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem;
`;

const CategoryStyled = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  min-width: 70px;
  transition: transform 0.2s ease;

  background-color: white;
  padding: 0.5rem 0.5rem;
  border-radius: 2rem;

  ${({ withBorder }) =>
    withBorder &&
    `
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
  `}

  img {
    width: 30px;
    height: auto;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.8rem;
    text-align: center;
    font-family: "Barlow";
    color: #292929;
    white-space: nowrap;
    font-weight: 500;
  }
`;

function CategoryBar({ withBorder = false }) {
  return (
    <Bar>
      {categoryData.map((cat, index) => (
        <CategoryStyled key={index} withBorder={withBorder}>
          <img src={cat.icon} alt={cat.label} />
          <span>{cat.label}</span>
        </CategoryStyled>
      ))}
    </Bar>
  );
}

export default CategoryBar;
