import React from "react";
import {
  StyledSecondaryCardHeading,
  StyledSecondaryCardImage,
  StyledSecondaryCardText,
  StyledSecondryCardContainer,
  StyledSecondryCardTextContainer,
} from "./secondaryCard.styled";
import { formatDateParts } from "../../utils";
import STRINGS from "../../constants/strings";

const SecondaryCard = ({
  image,
  heading,
  description,
  timestamp,
  location,
  price,
}) => {
  const updatedDate = formatDateParts(timestamp);

  return (
    <StyledSecondryCardContainer>
      <StyledSecondaryCardImage src={image} loading="lazy" alt={heading} />
      <StyledSecondryCardTextContainer>
        <StyledSecondaryCardHeading>{heading}</StyledSecondaryCardHeading>
        <StyledSecondaryCardText>{description}</StyledSecondaryCardText>
        <StyledSecondaryCardText>
          {STRINGS.DATE}&nbsp;{updatedDate}
        </StyledSecondaryCardText>
        <StyledSecondaryCardText>
          {STRINGS.LOCATION}&nbsp;{location}
        </StyledSecondaryCardText>
        <StyledSecondaryCardText>
          {STRINGS.PRICE}
          {price}
        </StyledSecondaryCardText>
      </StyledSecondryCardTextContainer>
    </StyledSecondryCardContainer>
  );
};

export default SecondaryCard;
