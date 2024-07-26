import { css } from "styled-components";
import { MONTHS } from "../constants/constants";

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

// Logic part of date conversion from given timestamp
export const formatDateParts = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const monthName = MONTHS[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const futureDate = new Date(date);
  futureDate.setDate(day + 5);
  const futureDay = futureDate.getDate();

  return `${monthName} ${day}-${futureDay}, ${year}`;
};
