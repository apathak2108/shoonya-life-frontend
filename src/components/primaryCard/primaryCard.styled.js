import styled from "styled-components";
import { flexContainer } from "../../utils";
import { PRIMARY_IMAGE_URL } from "../../constants/constants";

export const StyledPrimaryCardContainer = styled.section`
  height: ${({ theme }) => theme.breakpoints.sm};
  ${flexContainer({
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  })};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};

  @media (min-width: ${({ theme }) =>
      theme.widths.mWebMin}) and (max-width: ${({ theme }) =>
      theme.widths.mWebMax}) {
    display: none;
  }
`;

export const StyledPrimaryImageContainer = styled.div`
  height: ${({ theme }) => theme.heights.medium};
  width: ${({ theme }) => theme.widths.full};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-image: url(${PRIMARY_IMAGE_URL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledPrimaryCardTextContainer = styled.article`
  ${flexContainer({ flexDirection: "column", alignItems: "flex-start" })};
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const StyledPrimaryCardHeading = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledPrimaryCardText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
