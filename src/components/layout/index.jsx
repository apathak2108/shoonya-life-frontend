import React from "react";
import { StyledChildrenCotainer, StyledLayout } from "./layout.styled";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledChildrenCotainer>{children}</StyledChildrenCotainer>
    </StyledLayout>
  );
};

export default Layout;
