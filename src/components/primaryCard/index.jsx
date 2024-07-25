import React from "react";
import {
  StyledPrimaryCardContainer,
  StyledPrimaryCardHeading,
  StyledPrimaryCardImage,
  StyledPrimaryCardText,
  StyledPrimaryCardTextContainer,
} from "./primaryCard.styled";
import HomePrimaryImg from "../../assets/HomePrimaryImg.jpg";
import STRINGS from "../../constants/strings";

const PrimaryCard = () => {
  return (
    <StyledPrimaryCardContainer>
      <StyledPrimaryCardImage src={HomePrimaryImg} />
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
