import styled from "styled-components";
import { flexContainer } from "../../utils";

export const StyledFooter = styled.footer`
  ${flexContainer};
  color: grey;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: -12px;
  width: -webkit-fill-available;
`;
