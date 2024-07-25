import React from "react";
import {
  StyledSecondaryCardHeading,
  StyledSecondaryCardImage,
  StyledSecondaryCardText,
  StyledSecondryCardContainer,
  StyledSecondryCardTextContainer,
} from "./secondaryCard.styled";
import HomePrimaryImg from "../assets/HomePrimaryImg.jpg";
import STRINGS from "../constants/strings";

const SecondaryCard = () => {
  return (
    <StyledSecondryCardContainer>
      <StyledSecondaryCardImage src={HomePrimaryImg} />
      <StyledSecondryCardTextContainer>
        <StyledSecondaryCardHeading>
          Forest Yoga Retreat
        </StyledSecondaryCardHeading>
        <StyledSecondaryCardText>
          {STRINGS.PRIMARY_CARD_TEXT}
        </StyledSecondaryCardText>
        <StyledSecondaryCardText>Join us </StyledSecondaryCardText>
        <StyledSecondaryCardText>Join us </StyledSecondaryCardText>
        
        <StyledSecondaryCardText>Join us </StyledSecondaryCardText>
      </StyledSecondryCardTextContainer>
    </StyledSecondryCardContainer>
  );
};

export default SecondaryCard;
