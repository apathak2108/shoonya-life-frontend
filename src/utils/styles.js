import { css } from "styled-components";

// Helper function for flex container with centered alignment
export const flexContainer = ({
  alignItems = "center",
  flexDirection = "row",
  justifyContent = "center",
} = {}) => css`
  display: flex;
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
`;
