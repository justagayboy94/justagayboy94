import React from "react";
import { Header } from "../Header/Header";

import "./layout.css";

export interface Props {
  title: string;
  children: React.ReactNode;
}

export const Layout: React.SFC<Props> = ({ children, title }) => (
  <>
    <Header title={title} />
    {children}
  </>
);
