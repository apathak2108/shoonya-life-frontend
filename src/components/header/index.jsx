import React from "react";
import { StyledHeader, StyledHeaderTitle } from "./header.styled";
import STRINGS from "../../constants/strings";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>{STRINGS.TITLE}</StyledHeaderTitle>
    </StyledHeader>
  );
};

export default Header;
