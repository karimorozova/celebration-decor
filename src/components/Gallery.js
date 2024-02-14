import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Gallery } from "react-grid-gallery";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { imagesConfig } from "@/config/images";
import useWindowSize from "../../utils/hooks/useWindowSize";

import Section from "./common/Section";
import Container from "./common/Container";
import Tabs from "./common/Tabs";

const Logo = styled.div`
  position: absolute;
  top: 400px;
  left: 0;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 60px;
  p {
    font-style: italic;
    font-family: "Georgia Italic", cursive;
    color: rgba(0, 0, 0, 0.35);
    font-size: 24px;
    transform: rotate(-90deg);
    min-width: 267px;
    text-align: center;
    span {
      font-size: 35px;
      font-weight: 700;
      padding-right: 5px;
    }
  }
  @media only screen and (min-width: 1400px) {
    left: 70px;
    top: 450px;
    p {
      font-size: 35px;
      min-width: 367px;

      span {
        font-size: 45px;
      }
    }
  }
`;

const GalleryPage = () => {
  const { query } = useRouter();
  const { width } = useWindowSize();

  const [data, setData] = useState(imagesConfig.wedding);
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);
  const slides = data.map(({ original, originalW, originalH }) => ({
    src: original,
  }));

  useEffect(() => {
    if (query.category) {
      setData(imagesConfig[query.category.toLowerCase()]);
    }
  }, [query.category]);

  return (
    <Section pt={100} pb={100}>
      {width > 1034 && (
        <Logo>
          <p>
            <span>{"Celebration"}</span>
            {" decor"}
          </p>
        </Logo>
      )}
      <Container>
        <Tabs />
        <div>
          <Gallery
            images={data}
            onClick={handleClick}
            enableImageSelection={false}
          />
          <Lightbox
            slides={slides}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </div>
      </Container>
    </Section>
  );
};

export default GalleryPage;
