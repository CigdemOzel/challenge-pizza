import React from "react";
import styled from "styled-components";
import { footerContactData } from "../data/footerInfoData";
import { footerMenuData } from "../data/footerInfoData";
import InstagramGallery from "./InstagramGallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const FooterWrapper = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 2rem 18rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    flex-direction: column;
    text-align: center;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
    gap: 1rem;
  }
`;

const FooterBottom = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

const FooterLogoSection = styled.div`
  color: white;
  font-size: 2rem;
  font-family: "Londrina Solid", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    flex-direction: column;
    text-align: left;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <LeftSection>
          <FooterLogoSection>
            Teknolojik
            <br /> Yemekler
          </FooterLogoSection>

          <div>
            {footerContactData.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                  gap: "1rem",
                  fontFamily: "Barlow",
                  fontSize: "12px",
                  color: "#FFFFFF",
                }}
              >
                <img src={item.icon} alt="icon" style={{ width: "20px" }} />
                <div>
                  {Array.isArray(item.text) ? (
                    item.text.map((line, i) => <div key={i}>{line}</div>)
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </LeftSection>

        <div>
          <p
            style={{
              fontFamily: "Barlow",
              marginBottom: "1rem",
              marginTop: "3rem",
            }}
          >
            {footerMenuData.title}
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {footerMenuData.items.map((item, index) => (
              <li
                key={index}
                style={{
                  fontFamily: "Barlow",
                  fontSize: "12px",
                  color: "#FFFFFF",
                  marginBottom: "1rem",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <InstagramGallery />
      </FooterContent>
      <FooterBottom>
        <div>© 2023 Teknolojik Yemekler.</div>
        <FontAwesomeIcon icon={faTwitter} color="white" size="lg" />
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
