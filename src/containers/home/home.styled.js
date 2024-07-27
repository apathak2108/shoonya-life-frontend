import styled from "styled-components";
import { flexContainer } from "../../utils";

export const StyledHomeContainer = styled.main`
  padding: ${({ theme }) => theme.spacing.xxl};
  ${flexContainer({
    justifyContent: "none",
    alignItems: "none",
    flexDirection: "column",
  })};
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) =>
      theme.widths.mWebMin}) and (max-width: ${({ theme }) =>
      theme.widths.mWebMax}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const StyledSecondaryCardsContainer = styled.div`
  ${flexContainer({
    justifyContent: "flex-start",
    alignItems: "unset",
  })};
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) =>
      theme.widths.mWebMin}) and (max-width: ${({ theme }) =>
      theme.widths.mWebMax}) {
    flex-direction: column;
  }
`;

export const StyledSkeletonContainer = styled(StyledSecondaryCardsContainer)`
  justify-content: space-between;
`;

export const StyledError = styled.div`
  ${flexContainer};
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.error};
`;

export const StyledFilterAndSearchContainer = styled.div`
  ${flexContainer({
    justifyContent: "space-between",
    alignItems: "flex-start",
  })};
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) =>
      theme.widths.mWebMin}) and (max-width: ${({ theme }) =>
      theme.widths.mWebMax}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const StyledFilterContainer = styled.div`
  ${flexContainer};
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) =>
      theme.widths.mWebMin}) and (max-width: ${({ theme }) =>
      theme.widths.mWebMax}) {
    flex-direction: column;
    width: ${({ theme }) => theme.widths.full};
  }
`;

export const StyledSearchInput = styled.input`
  width: ${({ theme }) => theme.widths.thirtyThree};
  height: ${({ theme }) => theme.spacing.xl};
  text-indent: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  letter-spacing: ${({ theme }) => theme.spacing.xxxs};
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  @media (min-width: ${({ theme }) =>
      theme.widths.mWebMin}) and (max-width: ${({ theme }) =>
      theme.widths.mWebMax}) {
    width: ${({ theme }) => theme.widths.full};
    padding: 0;
  }
`;

export const StyledButtonsContainer = styled.div`
  ${flexContainer};
  width: ${({ theme }) => theme.widths.full};
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const StyledButton = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 8px 12px 8px 12px;
  cursor: pointer;

  &:active {
    padding: 7px 10px 7px 10px;
  }
`;
