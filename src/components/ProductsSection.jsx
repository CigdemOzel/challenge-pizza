import React from "react";
import styled from "styled-components";
import CategoryBar from "./CategoryBar";

const SectionWrapper = styled.section`
  text-align: center;
`;

const Subtitle = styled.p`
  font-family: Satisfy;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ce2829;
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-family: Barlow;
  font-size: 2rem;
  font-weight: 600;
  color: #292929;
`;

function ProductsSection() {
  return (
    <SectionWrapper>
      <Subtitle>en çok paketlenen menüler</Subtitle>
      <Title>Acıktıran Kodlara Doyuran Lezzetler</Title>
      <CategoryBar withBorder />
    </SectionWrapper>
  );
}

export default ProductsSection;
