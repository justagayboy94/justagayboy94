import React from "react";
import { Container } from "../Container/Container";
import { Header } from "../Header/Header";

import "./layout.css";

export interface Props {
  title: string;
  children: React.ReactNode;
}

export const Layout: React.SFC<Props> = ({ children, title }) => (
  <>
    <Header title={title} />
    <Container>{children}</Container>
  </>
);
