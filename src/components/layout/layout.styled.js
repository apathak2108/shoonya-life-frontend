import styled from "styled-components";
import { flexContainer } from "../../utils/styles";

export const StyledLayout = styled.main`
  height: 100vh;
  width: ${({ theme }) => theme.widths.full};
  ${flexContainer({ alignItems: "unset", flexDirection: "column" })};
  position: relative;
  overflow-y: scroll;
`;

export const StyledChildrenCotainer = styled.div`
  height: calc(100vh - 64px);
  position: relative;
  top: 64px;
  flex-grow: 1;
`;
