import React from "react";
import styled from "styled-components";
import CampaignCard from "./CampaignCard";

const CampaignWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(2, auto);
  gap: 1.5rem;
  padding: 2rem;
  margin: 0 auto;
  max-width: 850px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LargeCardWrapper = styled.div`
  grid-row: span 2;
  max-width: 400px;
`;

function Campaigns() {
  return (
    <CampaignWrapper>
      <LargeCardWrapper>
        <CampaignCard
          title={
            <>
              Özel <br /> Lezzetus
            </>
          }
          desc="Position: Absolute Acı Burger"
          bg="/cta/kart-1.png"
          variant="left"
        />
      </LargeCardWrapper>

      <CampaignCard
        title={
          <>
            Hackhathlon
            <br />
            Burger Menü
          </>
        }
        desc=""
        bg="/cta/kart-2.png"
        variant="right"
      />

      <CampaignCard
        title={
          <>
            <span style={{ color: "red" }}>Çoooook</span> hızlı
            <br />
            npm gibi kurye
          </>
        }
        desc=""
        bg="/cta/kart-3.png"
        variant="right"
        textColor="black"
      />
    </CampaignWrapper>
  );
}

export default Campaigns;
