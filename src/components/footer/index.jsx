import React from "react";
import { StyledFooter } from "./footer.styled";
import STRINGS from "../../constants/strings";

const Footer = () => {
  return <StyledFooter>{STRINGS.FOOTER_TEXT}</StyledFooter>;
};

export default Footer;
