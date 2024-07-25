import styled from "styled-components";
import { flexContainer } from "../utils/styles";

export const StyledSecondryCardContainer = styled.section`
  width: -webkit-fill-available;
  ${flexContainer({
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  })};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
`;

export const StyledSecondaryCardImage = styled.img`
  height: 130px;
  width: 170px;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  @media (min-width: ${({ theme }) =>
      theme.widths.mWebMin}) and (max-width: ${({ theme }) =>
      theme.widths.mWebMax}) {
    width: ${({ theme }) => theme.widths.full};
  }
`;

export const StyledSecondryCardTextContainer = styled.article`
  ${flexContainer({
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  })};
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const StyledSecondaryCardHeading = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledSecondaryCardText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
