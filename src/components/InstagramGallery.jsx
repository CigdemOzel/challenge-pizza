import React from "react";
import styled from "styled-components";

const images = [
  "/insta/li-1.png",
  "/insta/li-2.png",
  "/insta/li-3.png",
  "/insta/li-4.png",
  "/insta/li-5.png",
  "/insta/li-6.png",
];

const InstagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InstagramTitle = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: white;
  margin-top: 3rem;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const InstaImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3px;
`;

function InstagramGallery() {
  return (
    <InstagramWrapper>
      <InstagramTitle>Instagram</InstagramTitle>
      <ImageGrid>
        {images.map((imgSrc, index) => (
          <InstaImage key={index} src={imgSrc} alt={`instagram-${index}`} />
        ))}
      </ImageGrid>
    </InstagramWrapper>
  );
}

export default InstagramGallery;
