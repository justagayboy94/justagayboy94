import React from "react";
import styled from "../../helpers/styled-components";
import { Header } from "../Header/Header";
import { HeroImage } from "../HeroImage/HeroImage";

import "./layout.css";

export interface Props {
  title: string;
  heroImage: string;
  children: React.ReactNode;
}

const HeroImageWrapper = styled.div`
  width: 100vw;
  height: calc(
    100vh - ${props => props.theme.layoutWithHeroImage.headerHeight}px
  );
`;

export const LayoutWithHeroImage: React.SFC<Props> = ({
  children,
  heroImage,
  title
}) => (
  <>
    <Header title={title} />
    <HeroImageWrapper>
      <HeroImage image={heroImage} />
    </HeroImageWrapper>
    {children}
  </>
);
