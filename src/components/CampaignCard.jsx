import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  color: white;
  padding: 1.5rem;
  height: ${(props) => (props.size === "large" ? "200px" : "100px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  h3 {
    font-size: 1.2rem;
    z-index: 2;
  }

  p {
    font-size: 0.9rem;
    margin-top: 0.2rem;
    z-index: 2;
  }

  button {
    background-color: white;
    color: black;
    border: none;
    border-radius: 2rem;
    padding: 0.4rem 1.2rem;
    cursor: pointer;
    font-weight: 500;
    z-index: 2;
    align-self: start;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4); /* overlay efekti */
    border-radius: 1rem;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

function CampaignCard({ title, desc, bg, type }) {
  return (
    <Card bg={bg} size={type}>
      <div>
        <h3>{title}</h3>
        {desc && <p>{desc}</p>}
      </div>
      <button>Sipariş Ver</button>
    </Card>
  );
}

export default CampaignCard;
