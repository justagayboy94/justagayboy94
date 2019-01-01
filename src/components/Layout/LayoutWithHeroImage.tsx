import React from "react";
import styled from "../../helpers/styled-components";
import { Container } from "../Container/Container";
import { Header } from "../Header/Header";
import { HeroImage } from "../HeroImage/HeroImage";

import "./layout.css";

export interface Props {
  title: string;
  heroImage: string;
  children: React.ReactNode;
}

const HeroUnit = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  height: calc(
    100% - ${props => props.theme.layoutWithHeroImage.headerHeight}px
  );
`;

const Children = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
`;

export const LayoutWithHeroImage: React.SFC<Props> = ({
  children,
  heroImage,
  title
}) => (
  <>
    <HeroUnit>
      <Header title={title} />
      <HeroImageWrapper>
        <HeroImage image={heroImage} />
      </HeroImageWrapper>
    </HeroUnit>
    <Children>
      <Container>{children}</Container>
    </Children>
  </>
);
