import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaViber, FaTelegram } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import styled from "styled-components";

import { colors } from "@/config/colors";

import Section from "./Section";
import Container from "./Container";
import SocialMediaList from "./SocialMediaList";
import Modal from "./Modal";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-family: "Georgia Italic", cursive;
  font-style: italic;
  color: ${colors.secodaryText};
  font-size: 24px;
  font-weight: 700;
  padding: 7px;
  &:hover {
    text-decoration: underline;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  @media only screen and (max-width: 441px) {
    justify-content: center;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 20px;
  background-color: ${colors.secodaryText};
`;
const InternalLink = styled(Link)`
  text-decoration: none;
  color: ${colors.secodaryText};
  cursor: pointer;
  padding: 7px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
    color: ${colors.tealColor};
  }
`;
const Copy = styled.p`
  color: ${colors.secodaryText};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  padding-top: 40px;
`;
const PhoneWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${colors.secodaryText};
  text-decoration: none;
  p {
    position: relative;
    padding-bottom: 5px;
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${colors.tealColor};
      opacity: 0;
    }
  }
  &:hover {
    p::after {
      opacity: 1;
    }
  }
`;
const Footer = () => {
  const [isContactModal, setIsContactModal] = useState();

  return (
    <Section pb={40} bg={colors.mainAccent}>
      <Container>
        <Content>
          <Logo href={"/"}>{"Celebration Decor"}</Logo>
          <SocialMediaList />

          <SocialMedia>
            <InternalLink href={"/#about"}>{"About"}</InternalLink>
            <Line />

            <InternalLink href={"/#what"}>{"Services"}</InternalLink>
            <Line />
            <InternalLink href={"/#reviews"}>{"Reviews"}</InternalLink>
            <Line />
            <InternalLink
              href={{ pathname: "/gallery", query: { category: "Wedding" } }}
            >
              {"Gallery"}
            </InternalLink>
            <Line />

            <InternalLink as={"div"} onClick={() => setIsContactModal(true)}>
              {"Contacts"}
            </InternalLink>
          </SocialMedia>

          <PhoneWrap href={"tel:330625744735"}>
            <BsTelephone size={20} color={colors.tealColor} />
            <p>{"+330625744735"}</p>
          </PhoneWrap>
          <PhoneWrap href={"https://wa.me/+380959021066"} target="_blank">
            <FaWhatsapp size={20} color={colors.whatsapp} />
            <p>{"+380959021066"}</p>
          </PhoneWrap>
          <PhoneWrap href={"https://t.me/+380959021066"} target="_blank">
            <FaTelegram size={20} color={colors.telegram} />
            <p>{"+380959021066"}</p>
          </PhoneWrap>
          <PhoneWrap href={"mailto:lenaryapolova2@gmail.com"}>
            <TfiEmail size={20} color={colors.tealColor} />
            <p>{"lenaryapolova2@gmail.com"}</p>
          </PhoneWrap>
          <Copy>{`Copyright © ${new Date().getFullYear()} Celebration decor. All rights reserved.`}</Copy>
        </Content>
        {isContactModal && (
          <Modal closeModal={() => setIsContactModal(false)} />
        )}
      </Container>
    </Section>
  );
};

export default Footer;
