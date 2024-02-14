import React from "react";

import { colors } from "@/config/colors";

import Slider from "./common/Slider";
import Container from "./common/Container";
import Section from "./common/Section";

const Rewies = () => {
  return (
    <div id="reviews">
      <Section pt={0} pb={0} bg={colors.mainWhite} borBot={colors.border}>
        <Container>
          <Slider />
        </Container>
      </Section>
    </div>
  );
};

export default Rewies;
