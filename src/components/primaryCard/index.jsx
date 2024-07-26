import React from "react";
import {
  StyledPrimaryCardContainer,
  StyledPrimaryCardHeading,
  StyledPrimaryCardText,
  StyledPrimaryCardTextContainer,
  StyledPrimaryImageContainer,
} from "./primaryCard.styled";
import STRINGS from "../../constants/strings";

const PrimaryCard = () => {
  return (
    <StyledPrimaryCardContainer>
      <StyledPrimaryImageContainer />
      <StyledPrimaryCardTextContainer>
        <StyledPrimaryCardHeading>
          {STRINGS.PRIMARY_CARD_HEADING}
        </StyledPrimaryCardHeading>
        <StyledPrimaryCardText>
          {STRINGS.PRIMARY_CARD_TEXT}
        </StyledPrimaryCardText>
      </StyledPrimaryCardTextContainer>
    </StyledPrimaryCardContainer>
  );
};

export default PrimaryCard;
