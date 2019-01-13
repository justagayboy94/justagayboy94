import React from "react";
import styled from "../../helpers/styled-components";

export interface StatData {
  label: string;
  value: number;
}

export interface Props {
  data: StatData[];
}

const StyledStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${props => props.theme.stats.marginTop}px;
  margin-bottom: ${props => props.theme.stats.marginBottom}px;

  @media (${props => props.theme.breakpoints.m}) {
    margin-bottom: ${props => props.theme.stats.dekstop.marginBottom}px;
  }
`;

const StatNumber = styled.span`
  display: block;
  font-family: ${props => props.theme.stats.fontFamily};
  margin: 0;
  text-transform: lowercase;
  position: relative;
  text-align: center;
  font-size: ${props => props.theme.stats.fontSize}px;
`;

const StatBlock = styled.div`
  width: 50%;
  flex-shrink: 0;
  margin-bottom: ${props => props.theme.rythmBase * 4}px;

  @media (${props => props.theme.breakpoints.m}) {
    width: 33.33%;
    margin-bottom: 0;
  }
`;

export const Stats: React.SFC<Props> = (props: Props) => (
  <StyledStats>
    {props.data.map(data => (
      <StatBlock key={data.label}>
        <StatNumber>{data.value}</StatNumber>
        <span>{data.label}</span>
      </StatBlock>
    ))}
  </StyledStats>
);
