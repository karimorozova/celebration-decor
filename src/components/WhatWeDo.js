import styled from "styled-components";

import { colors } from "@/config/colors";

import Container from "./common/Container";
import Section from "./common/Section";
import Sides from "./common/Sides";
import LeftSide from "./common/LeftSide";
import RightSide from "./common/RightSide";
import Title from "./common/Title";
import Subtitle from "./common/Subtitle";
import CommonImage from "./common/CommonImage";

const Content = styled.div`
  width: 100%;
  height: 100%;
  border-right: 2px solid ${colors.border};
  padding-bottom: 80px;
  padding-top: 40px;
`;
const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    border: 4px solid ${colors.border};
  }
`;
const Text = styled.div`
  @media only screen and (min-width: 768px) {
    padding-right: 40px;
  }
`;

const WhatWeDo = () => {
  return (
    <div id="what">
      <Section
        pt={0}
        pb={0}
        bg={colors.mainWhite}
        id="what"
        borBot={colors.border}
      >
        <Container>
          <Content>
            <Sides>
              <LeftSide pr={10}>
                <ImgWrap>
                  <CommonImage
                    source={"/images/what.jpg"}
                    width={1125}
                    height={1125}
                  />
                </ImgWrap>
              </LeftSide>
              <RightSide>
                <Title title={"What we do"} />
                <Text>
                  <Subtitle
                    pb={10}
                    des={
                      "We are specialized in floristry and decoration of any events:"
                    }
                  />
                  <Subtitle
                    pb={10}
                    des={
                      "Weddings,children's birthday, bridal shower, gender party, private evenings, etc."
                    }
                  />
                  <Subtitle pb={10} des={"We also organize floral workshops"} />
                </Text>
              </RightSide>
            </Sides>
          </Content>
        </Container>
      </Section>
    </div>
  );
};

export default WhatWeDo;
