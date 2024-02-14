import Link from "next/link";
import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp, FaTelegram } from "react-icons/fa6";

import { colors } from "@/config/colors";

import SocialMediaList from "./SocialMediaList";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  min-width: 100vw;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;
const Wrap = styled.div`
  max-width: 720px;
  width: 100%;
  background-color: ${colors.border};
  padding: 40px;
  border-radius: 4px;
  min-height: 541px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: ${colors.boxShadow};
  @media only screen and (max-width: 575px) {
    padding: 50px 15px;
    min-height: 561px;
  }
`;
const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  color: ${colors.mainText};
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-size: 18px;
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

const ContactsModal = ({ closeModal = () => {} }) => {
  return (
    <Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <Wrap>
        <Item href={"tel:330625744735"}>
          <FaPhoneAlt color={colors.tealColor} size={20} />
          <p>{"+330625744735"}</p>
        </Item>
        <Item href={"https://wa.me/+380959021066"} target="_blank">
          <FaWhatsapp size={20} color={colors.whatsapp} />
          <p>{"+380959021066"}</p>
        </Item>
        <Item href={"https://t.me/+380959021066"} target="_blank">
          <FaTelegram size={20} color={colors.telegram} />
          <p>{"+380959021066"}</p>
        </Item>
        <Item href={"mailto:lenaryapolova2@gmail.com"}>
          <TfiEmail color={colors.tealColor} size={20} />
          <p>{"lenaryapolova2@gmail.com"}</p>
        </Item>
        <SocialMediaList />
      </Wrap>
    </Backdrop>
  );
};

export default ContactsModal;
