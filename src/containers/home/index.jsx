import React from "react";
import {
  StyledButton,
  StyledButtonsContainer,
  StyledFilterAndSearchContainer,
  StyledFilterContainer,
  StyledHomeContainer,
  StyledSearchContainer,
  StyledSecondaryCardsContainer,
  StyledSelect,
} from "./home.styled";
import MainCard from "../../components/primaryCard";
import SecondaryCard from "../../secondaryCard";
import STRINGS from "../../constants/strings";
import Footer from "../../components/footer";

const HomeContainer = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <StyledHomeContainer>
      <MainCard />
      <StyledFilterAndSearchContainer>
        <StyledFilterContainer>
          <StyledSelect
            options={options}
            placeholder={STRINGS.DATE_FILTER_PLACEHOLDER}
          />
          <StyledSelect
            options={options}
            placeholder={STRINGS.TYPE_FILTER_PLACEHOLDER}
          />
        </StyledFilterContainer>
        <StyledSearchContainer
          placeholder={STRINGS.SEARCH_FILTER_PLACEHOLDER}
        />
      </StyledFilterAndSearchContainer>
      <StyledSecondaryCardsContainer>
        <SecondaryCard />
        <SecondaryCard />
        <SecondaryCard />
      </StyledSecondaryCardsContainer>
      <StyledButtonsContainer>
        <StyledButton role={STRINGS.ROLE_BUTTON}>
          {STRINGS.PREV_BUTTON_TEXT}
        </StyledButton>
        <StyledButton role={STRINGS.ROLE_BUTTON}>
          {STRINGS.NEXT_BUTTON_TEXT}
        </StyledButton>
      </StyledButtonsContainer>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
