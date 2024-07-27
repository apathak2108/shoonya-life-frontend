import styled from "styled-components";

export const StyledHeader = styled.header`
  height: ${({ theme }) => theme.spacing.xxxl};
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ theme }) => theme.widths.full};
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;

    @media (min-width: ${({ theme }) =>
      theme.widths.mWebMin}) and (max-width: ${({ theme }) =>
      theme.widths.mWebMax}) {
    justify-content: center;
  }
`;

export const StyledHeaderTitle = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-left: ${({ theme }) => theme.spacing.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.spacing.xxxs};

    @media (min-width: ${({ theme }) =>
      theme.widths.mWebMin}) and (max-width: ${({ theme }) =>
      theme.widths.mWebMax}) {
    margin-left: 0;
  }
`;
