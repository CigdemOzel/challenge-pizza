import React from "react";
import { campaignData } from "../data/campaigns";
import styled from "styled-components";
import CampaignCard from "./CampaignCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Campaigns() {
  const largeCard = campaignData.find((item) => item.type === "large");
  const smallCards = campaignData.filter((item) => item.type === "small");

  return (
    <Grid>
      <CampaignCard {...largeCard} />
      <Column>
        {smallCards.map((item) => (
          <CampaignCard key={item.id} {...item} />
        ))}
      </Column>
    </Grid>
  );
}

export default Campaigns;
