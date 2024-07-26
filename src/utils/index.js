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

// Extracting unique dates for filter by location
export const extractUniqueLocationOptions = (data) => {
  const locations = data.map((event) => event.location);
  const uniqueLocations = [...new Set(locations)];
  uniqueLocations.sort();
  const locationOptions = uniqueLocations.map((location) => ({
    value: location,
    label: location,
  }));
  return locationOptions;
};

// Extracing unique types for filter by type
export const extractUniqueTypeOptions = (data) => {
  const allTags = data?.flatMap((event) => event?.tag);
  const uniqueTags = [...new Set(allTags)];
  uniqueTags.sort();
  const tagOptions = uniqueTags?.map((tag) => ({
    value: tag,
    label: tag.charAt(0).toUpperCase() + tag.slice(1),
  }));
  return tagOptions;
};

// Function for calculating last page
export const calculateLastPageNumber = (data) => {
  const len = data?.length;
  const lastPageNumber = Math.floor(len / 3) + (len % 3);
  return lastPageNumber;
};

//Function for filtering empty params
export const filterEmptyParams = (params) => {
  const entries = Object.entries(params);
  const filteredEntries = entries.filter(([_, value]) => value !== "");
  return Object.fromEntries(filteredEntries);
};

//Styling of react-select
const getResponsiveWidth = () => {
  if (window.matchMedia("(min-width: 360px) and (max-width: 768px)").matches) {
    return "100%";
  }
  return "180px";
};

export const customStyles = {
  container: (provided) => ({
    ...provided,
    width: getResponsiveWidth(),
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#1b3252",
    borderColor: "none",
    boxShadow: "none",
    "&:hover": {
      borderColor: "none",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#ddd" : "#fff",
    color: "#333",
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#fff",
    "&:hover": {
      color: "#fff",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "#fff",
    "&:hover": {
      color: "#fff",
    },
  }),
};
